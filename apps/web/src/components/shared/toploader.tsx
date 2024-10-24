import NextTopLoader from "nextjs-toploader";
export default function TopLoader() {
  return (
    <NextTopLoader
      color="#6f00ff"
      initialPosition={0.08}
      crawlSpeed={100}
      height={2}
      crawl={true}
      showSpinner={true}
      easing="ease"
      speed={100}
      shadow="0 0 10px #6f00ff,0 0 5px #6f00ff"
      zIndex={10000}
    />
  );
}
