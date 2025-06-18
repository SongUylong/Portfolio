"use client";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Link, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string | React.ReactNode;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: string;
  skillLevel: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({
  timelineData,
}: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>(
    {}
  );
  const [viewMode, setViewMode] = useState<"orbital">("orbital");
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [centerOffset, setCenterOffset] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const [screenWidth, setScreenWidth] = useState<number>(1024); // Default to desktop size for SSR consistency
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const [hasInteracted, setHasInteracted] = useState(false);

  // Initialize screen width after hydration
  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  // Add resize handler
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setHasInteracted(true);
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setHasInteracted(true);
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false;
        }
      });

      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);

        const relatedItems = getRelatedItems(id);
        const newPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);

        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => {
    let rotationTimer: NodeJS.Timeout;
    const isMobile = screenWidth < 768;

    if (autoRotate && viewMode === "orbital") {
      if (isMobile) {
        const increment = 0.1;
        const interval = 100;
        rotationTimer = setInterval(() => {
          setRotationAngle((prev) => {
            const newAngle = (prev + increment) % 360;
            return Number(newAngle.toFixed(2));
          });
        }, interval);
      } else {
        const increment = 1.0;
        const interval = 80;
        rotationTimer = setInterval(() => {
          setRotationAngle((prev) => {
            const newAngle = (prev + increment) % 360;
            return Number(newAngle.toFixed(3));
          });
        }, interval);
      }
    }

    return () => {
      if (rotationTimer) {
        clearInterval(rotationTimer);
      }
    };
  }, [autoRotate, viewMode, screenWidth]);

  const centerViewOnNode = (nodeId: number) => {
    if (viewMode !== "orbital" || !nodeRefs.current[nodeId]) return;

    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;

    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    // Responsive radius: smaller on mobile devices
    const radius = screenWidth < 768 ? 130 : screenWidth < 1024 ? 200 : 200;
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian) + centerOffset.x;
    const y = radius * Math.sin(radian) + centerOffset.y;

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(
      0.4,
      Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2))
    );

    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    const relatedItems = getRelatedItems(activeNodeId);
    return relatedItems.includes(itemId);
  };

  const getStatusStyles = (status: string): string => {
    return "text-white bg-black border-white";
  };

  return (
    <div
      className="w-full h-[450px] sm:h-[500px] lg:h-[550px] flex flex-col items-center justify-center bg-background overflow-hidden"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="relative w-full max-w-sm sm:max-w-2xl lg:max-w-4xl h-full flex items-center justify-center px-4 sm:px-0">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{
            perspective: "1000px",
            transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)`,
          }}
        >
          <div className="absolute w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-primary via-primary/80 to-primary/60 flex items-center justify-center z-10">
            {hasInteracted && (
              <>
                <div className="absolute w-10 h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full border border-primary/20 animate-ping opacity-70"></div>
                <div
                  className="absolute w-12 h-12 sm:w-18 sm:h-18 lg:w-24 lg:h-24 rounded-full border border-primary/10 animate-ping opacity-50"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </>
            )}
            <div className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 rounded-full bg-background/80 backdrop-blur-md"></div>
          </div>

          <div className="absolute w-60 h-60 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full border border-primary/10"></div>

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id] && hasInteracted;
            const Icon = item.icon;

            const isMobile = screenWidth < 768;
            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px)` + (isMobile ? ' scale(0.95)' : ''),
              zIndex: isExpanded ? 200 : position.zIndex,
              opacity: isExpanded ? 1 : position.opacity,
              transition: isMobile
                ? 'all 0.3s cubic-bezier(0.4,0,0.2,1)'
                : 'all 0.7s cubic-bezier(0.4,0,0.2,1)',
              touchAction: 'manipulation',
            };

            return (
              <div
                key={item.id}
                ref={(el) => {
                  if (el) nodeRefs.current[item.id] = el;
                }}
                className={`absolute cursor-pointer ${isMobile ? 'active:scale-105' : ''}`}
                style={nodeStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
              >
                <div
                  className={`absolute rounded-full -inset-1 ${isPulsing ? "animate-pulse duration-700" : ""}`}
                  style={{
                    background: `radial-gradient(circle, rgba(var(--primary),0.2) 0%, rgba(var(--primary),0) 70%)`,
                    width: `${(item.skillLevel * 0.3 + 32)}px`,
                    height: `${(item.skillLevel * 0.3 + 32)}px`,
                    left: `-${(item.skillLevel * 0.3 + 32 - 32) / 2}px`,
                    top: `-${(item.skillLevel * 0.3 + 32 - 32) / 2}px`,
                    pointerEvents: 'none',
                  }}
                ></div>

                <div
                  className={`
                  w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center
                  ${
                    isExpanded
                      ? "bg-primary text-primary-foreground"
                      : isRelated
                      ? "bg-primary/50 text-primary-foreground"
                      : "bg-background text-foreground"
                  }
                  border-2 
                  ${
                    isExpanded
                      ? "border-primary shadow-lg shadow-primary/30"
                      : isRelated
                      ? "border-primary"
                      : "border-primary/40"
                  }
                  transition-all ${isMobile ? 'duration-200' : 'duration-300'} transform
                  ${isExpanded ? (isMobile ? "scale-110" : "scale-125 sm:scale-150") : ""}
                  ${isMobile ? 'active:scale-105' : ''}
                `}
                  style={{ minWidth: isMobile ? 44 : 32, minHeight: isMobile ? 44 : 32 }}
                >
                  <Icon size={isMobile ? 16 : screenWidth < 1024 ? 18 : 20} />
                </div>

                <div
                  className={`
                  absolute top-10 sm:top-12 lg:top-14 whitespace-nowrap
                  text-sm sm:text-base lg:text-base font-semibold tracking-wider
                  transition-all duration-300
                  ${isExpanded ? "text-primary scale-110 sm:scale-125" : "text-foreground/70"}
                `}
                  style={{
                    left: '50%',
                    transform: 'translateX(-50%)',
                    maxWidth: '120px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}
                >
                  {item.title}
                </div>

                {isExpanded && (
                  <Card className="absolute top-18 sm:top-22 left-1/2 -translate-x-1/2 w-56 sm:w-64 lg:w-72 bg-background/90 backdrop-blur-lg border-primary/30 shadow-xl shadow-primary/10 overflow-visible max-w-[calc(100vw-2rem)]">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-primary/50"></div>
                    <CardHeader className="pb-2 px-3 sm:px-6">
                      <div className="flex justify-between items-center">
                        <Badge
                          className={`px-2 text-xs ${getStatusStyles(item.status)}`}
                        >
                          {item.status.toUpperCase()}
                        </Badge>
                        <span className="text-xs font-mono text-muted-foreground">
                          {item.date}
                        </span>
                      </div>
                      <CardTitle className="text-sm mt-2 text-foreground">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-3 sm:px-6">
                      <p className="text-foreground/80 text-sm">{item.content}</p>

                      <div className="mt-4 pt-3 border-t border-primary/10">
                        <div className="flex justify-between items-center text-xs mb-1">
                          <span className="flex items-center text-foreground/70">
                            <Zap size={10} className="mr-1" />
                            Expertise Skill Level
                          </span>
                          <span className="font-mono text-foreground">{item.skillLevel}%</span>
                        </div>
                        <div className="w-full h-1 bg-primary/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary to-primary/60"
                            style={{ width: `${item.skillLevel}%` }}
                          ></div>
                        </div>
                      </div>

                      {item.relatedIds.length > 0 && (
                        <div className="mt-2 pt-2 border-t border-primary/10">
                          <div className="flex items-center mb-1">
                            <Link size={10} className="text-foreground/70 mr-1" />
                            <h4 className="text-xs uppercase tracking-wider font-medium text-foreground/70">
                              Connected Nodes
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-0.5">
                            {item.relatedIds.map((relatedId) => {
                              const relatedItem = timelineData.find(
                                (i) => i.id === relatedId
                              );
                              return (
                                <Button
                                  key={relatedId}
                                  variant="outline"
                                  size="sm"
                                  className="flex items-center h-5 px-1.5 py-0 text-xs rounded-none border-primary/20 bg-transparent hover:bg-primary/10 text-foreground/70 hover:text-primary transition-all"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleItem(relatedId);
                                  }}
                                >
                                  <span className="truncate max-w-16 sm:max-w-20">
                                    {relatedItem?.title}
                                  </span>
                                  <ArrowRight
                                    size={6}
                                    className="ml-0.5 text-foreground/60 flex-shrink-0"
                                  />
                                </Button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
