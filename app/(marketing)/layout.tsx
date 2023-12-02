// ÇOK Önemli

import Navbar from "./_components/navbar";

// Her bir organizasyon Folder'ı ( "()" lı olanlar ) kendi layoutlarına sahiptirler!!!

function MarketingLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full">
        <Navbar/>
      <main className="h-full pt-40">{children}</main>
    </div>
  );
}
export default MarketingLayout;
