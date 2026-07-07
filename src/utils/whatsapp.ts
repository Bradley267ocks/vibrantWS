// WhatsApp pre-filled messages and URL generator

export const WHATSAPP_NUMBER = "27645192556";

export const WHATSAPP_MESSAGES = {
  getStarted: "Hi Vibrant Web Solutions. I'd like to see a free preview of my new website.",
  getMyWebsite: "Hi Vibrant Web Solutions. I'd like my free website preview.",
  getMoreCustomers: "Hi Vibrant Web Solutions. I'm interested in getting more customers for my business.",
  freePreview: "Hi Vibrant Web Solutions. I'd like to see a free preview of my new website.",
  contactUs: "Hi Vibrant Web Solutions. I'd like to discuss my business.",
  buildMyWebsite: "Hi Vibrant Web Solutions. I'd like my free website preview.",
  claimMyWebsite: "Hi Vibrant Web Solutions. I'd like to claim my free website preview."
};

export const getWhatsAppUrl = (messageKey: keyof typeof WHATSAPP_MESSAGES) => {
  const text = WHATSAPP_MESSAGES[messageKey];
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};

export const getWhatsAppCustomUrl = (customText: string) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(customText)}`;
};
