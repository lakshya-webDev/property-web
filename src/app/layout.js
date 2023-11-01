import "../styles/globals.css";
import "remixicon/fonts/remixicon.css";
import { ReduxProvider } from "@/Redux/provider";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
