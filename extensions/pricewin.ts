import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

// Pi packages cannot ship an mcp.json, so the server is registered from code on
// every load. A user's own mcp.json entry named "pricewin" takes precedence.
export default function (pi: ExtensionAPI) {
  pi.registerMcpServer("pricewin", {
    url: "https://mcp.price.win/mcp",
    description:
      "Live hotel and flight prices compared across Booking.com, Agoda, Trip.com and Traveloka, in USD",
  });
}
