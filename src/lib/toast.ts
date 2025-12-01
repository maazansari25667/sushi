import { toast } from "sonner";

// Success toast for order actions
export const showOrderSuccessToast = () => {
  toast.success("Redirecting to Checkout", {
    description: "Opening checkout page...",
    duration: 3000,
    icon: "🛍️",
  });
};

// Phone number copied toast
export const showPhoneCopiedToast = (phone: string) => {
  toast.success("Phone Number Copied!", {
    description: `${phone} copied to clipboard`,
    duration: 2000,
    icon: "📞",
  });
};

// Form submission success
export const showFormSuccessToast = (message: string = "Message sent successfully!") => {
  toast.success("Success!", {
    description: message,
    duration: 4000,
    icon: "✅",
  });
};

// Form submission error
export const showFormErrorToast = (message: string = "Something went wrong. Please try again.") => {
  toast.error("Error", {
    description: message,
    duration: 4000,
    icon: "❌",
  });
};

// Generic success toast
export const showSuccessToast = (title: string, description?: string) => {
  toast.success(title, {
    description,
    duration: 3000,
  });
};

// Generic error toast
export const showErrorToast = (title: string, description?: string) => {
  toast.error(title, {
    description,
    duration: 4000,
  });
};

// Generic info toast
export const showInfoToast = (title: string, description?: string) => {
  toast.info(title, {
    description,
    duration: 3000,
  });
};

// Loading toast (returns toast ID for dismissal)
export const showLoadingToast = (message: string = "Loading...") => {
  return toast.loading(message);
};

// Dismiss a specific toast
export const dismissToast = (toastId: string | number) => {
  toast.dismiss(toastId);
};

// Email copied toast
export const showEmailCopiedToast = (email: string) => {
  toast.success("Email Copied!", {
    description: `${email} copied to clipboard`,
    duration: 2000,
    icon: "✉️",
  });
};

// Address copied toast
export const showAddressCopiedToast = () => {
  toast.success("Address Copied!", {
    description: "Address copied to clipboard",
    duration: 2000,
    icon: "📍",
  });
};

// PWA install prompt
export const showPWAInstallToast = () => {
  toast.info("Install Our App", {
    description: "Get quick access to shop and products",
    duration: 5000,
    icon: "📱",
  });
};

// Reservation toast
export const showReservationToast = () => {
  toast.success("Contact Request Sent", {
    description: "We'll contact you shortly to assist",
    duration: 4000,
    icon: "📧",
  });
};

// WhatsApp toast
export const showWhatsAppToast = () => {
  toast.success("Opening WhatsApp", {
    description: "Starting conversation...",
    duration: 2000,
    icon: "💬",
  });
};

// Directions toast
export const showDirectionsToast = () => {
  toast.success("Opening Maps", {
    description: "Getting directions to our location",
    duration: 2000,
    icon: "🗺️",
  });
};

// Menu item added toast
export const showAddToCartToast = (itemName: string) => {
  toast.success("Added to Order", {
    description: `${itemName} added to your cart`,
    duration: 3000,
    icon: "🛒",
  });
};

// Share toast
export const showShareToast = () => {
  toast.success("Link Copied", {
    description: "Share link copied to clipboard",
    duration: 2000,
    icon: "🔗",
  });
};

// Gallery saved toast
export const showGallerySavedToast = () => {
  toast.success("Image Saved", {
    description: "Added to your favorites",
    duration: 2000,
    icon: "⭐",
  });
};

// Live chat toast
export const showChatToast = () => {
  toast.info("Chat Started", {
    description: "We're here to help!",
    duration: 3000,
    icon: "💬",
  });
};
