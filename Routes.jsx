import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import ProgressAchievementHub from './pages/progress-achievement-hub';
import Homepage from './pages/homepage-ai-educational-platform';
import DynamicRoadmapGenerator from './pages/dynamic-roadmap-generator';
import SkillIntelligenceHub from './pages/skill-intelligence-hub';
import AIMentorInterface from './pages/ai-mentor-interface';
import ExplorationDiscoveryEngine from './pages/exploration-discovery-engine';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<AIMentorInterface />} />
        <Route path="/progress-achievement-hub" element={<ProgressAchievementHub />} />
        <Route path="/homepage-ai-educational-platform" element={<Homepage />} />
        <Route path="/dynamic-roadmap-generator" element={<DynamicRoadmapGenerator />} />
        <Route path="/skill-intelligence-hub" element={<SkillIntelligenceHub />} />
        <Route path="/ai-mentor-interface" element={<AIMentorInterface />} />
        <Route path="/exploration-discovery-engine" element={<ExplorationDiscoveryEngine />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
