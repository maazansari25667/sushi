"use client";

import { motion } from "framer-motion";

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
  steps?: string[];
}

export function ProgressIndicator({ 
  currentStep, 
  totalSteps, 
  steps 
}: ProgressIndicatorProps) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full space-y-4">
      {/* Progress Bar */}
      <div className="relative h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-orange-500 to-orange-600 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>

      {/* Step Indicators */}
      {steps && (
        <div className="flex justify-between">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col items-center flex-1 ${
                index < steps.length - 1 ? "pr-4" : ""
              }`}
            >
              <motion.div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mb-2 ${
                  index + 1 <= currentStep
                    ? "bg-primary text-white"
                    : "bg-muted text-muted-foreground"
                }`}
                initial={{ scale: 0.8 }}
                animate={{ 
                  scale: index + 1 === currentStep ? [1, 1.1, 1] : 1 
                }}
                transition={{ 
                  duration: 0.5,
                  repeat: index + 1 === currentStep ? Infinity : 0,
                  repeatDelay: 1
                }}
              >
                {index + 1}
              </motion.div>
              <span className={`text-xs text-center ${
                index + 1 <= currentStep 
                  ? "text-foreground font-medium" 
                  : "text-muted-foreground"
              }`}>
                {step}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Step Counter */}
      <div className="text-center text-sm text-muted-foreground">
        Step {currentStep} of {totalSteps}
      </div>
    </div>
  );
}
