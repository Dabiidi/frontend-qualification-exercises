import { fonts } from "./styles/fonts";
import { Providers } from "./providers";
import theme from "./theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ background: theme.colors.brand[900], color: theme.colors.neutralWhite , minHeight: "100vh" }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

