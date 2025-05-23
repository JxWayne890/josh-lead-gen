
import { useToast as useShadcnToast } from "@/components/ui/use-toast";

// Export with an interface that includes the success variant and className
export interface UseToastOptions {
  variant?: "default" | "destructive" | "success";
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}

export const useToast = () => {
  const { toast: innerToast, ...rest } = useShadcnToast();
  
  return {
    ...rest,
    toast: (options: UseToastOptions) => innerToast(options),
  };
};

// Create a standalone toast function
export const toast = (options: UseToastOptions) => {
  // This is a wrapper that will be properly connected through the provider
  const { toast } = useShadcnToast();
  return toast(options);
};
