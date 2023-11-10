import "../styles/globals.css";
import "remixicon/fonts/remixicon.css";
import { ReduxProvider } from "@/Redux/provider";
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body suppressHydrationWarning={true} className="min-h-full flex">
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
