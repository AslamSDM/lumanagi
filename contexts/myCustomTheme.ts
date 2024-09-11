import {
  AvatarComponent,
  RainbowKitProvider,
  Theme,
} from "@rainbow-me/rainbowkit";

export const myCustomTheme: Theme = {
  blurs: {
    modalOverlay: "blur(1px)", // Customize this based on design requirements
  },
  colors: {
    accentColor: "#ffffff", // White accent color
    accentColorForeground: "#1c1c1c", // Dark foreground for contrast
    actionButtonBorder: "1px solid #ffffff", // White border for action buttons
    actionButtonBorderMobile: "1px solid #ffffff",
    actionButtonSecondaryBackground: "#ff3b30", // Red background for secondary actions (like "Login" button)
    closeButton: "#ffffff", // White close button
    closeButtonBackground: "#414593", // Background close button color (matches the modal gradient start)
    connectButtonBackground: "#ffffff", // White background for wallet buttons
    connectButtonBackgroundError: "#ff3b30", // Red background for error state
    connectButtonInnerBackground: "#00022E", // Dark blue inner background for hover or active state
    connectButtonText: "#1c1c1c", // Dark text for the wallet connect button
    connectButtonTextError: "#ffffff", // White text for error state
    connectionIndicator: "#ffffff", // Connection indicator color
    downloadBottomCardBackground: "#00022E", // Dark blue background
    downloadTopCardBackground: "#414593", // Gradient top card background
    error: "#ff3b30", // Red color for errors
    generalBorder: "#ffffff", // White general border color
    generalBorderDim: "rgba(255, 255, 255, 0.2)", // Diminished border color
    menuItemBackground: "#00022E", // White background for menu items
    modalBackdrop: "rgba(0, 0, 0, 0.5)", // Semi-transparent black backdrop
    modalBackground: "linear-gradient(177deg, #414593 0%, #00022E 100.23%)", // Custom gradient background from Figma design
    modalBorder: "1px solid #ffffff", // White border for modal
    modalText: "#ffffff", // White text color inside modal
    modalTextDim: "rgba(255, 255, 255, 0.7)", // Dimmed white text for secondary text
    modalTextSecondary: "#b3b3b3", // Lighter gray for secondary modal text
    profileAction: "#283573", // White color for profile actions
    profileActionHover: "#414593", // Background color on hover for profile actions
    profileForeground: "#linear-gradient(177deg, #414593 0%, #00022E 100.23%)", // Foreground color for profile components
    selectedOptionBorder: "1px solid #ffffff", // White border for selected options
    standby: "#b3b3b3", // Gray color for standby state
  },
  fonts: {
    body: "Arial, sans-serif", // Standard system font or custom font
  },
  radii: {
    actionButton: "8px", // Rounded corners for action buttons
    connectButton: "8px", // Rounded corners for connect button
    menuButton: "8px", // Rounded corners for menu button
    modal: "12px", // Rounded corners for modal
    modalMobile: "12px", // Rounded corners for mobile modal
  },
  shadows: {
    connectButton: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Subtle shadow for connect button
    dialog: "0px 10px 30px rgba(0, 0, 0, 0.3)", // Shadow for dialog/modal
    profileDetailsAction: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Shadow for profile action details
    selectedOption: "0px 0px 0px 2px rgba(255, 255, 255, 0.5)", // Shadow for selected option
    selectedWallet: "0px 0px 0px 2px rgba(255, 255, 255, 0.5)", // Shadow for selected wallet
    walletLogo: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Shadow for wallet logo
  },
};
