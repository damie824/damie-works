import BlogHeader from "@/components/blog/header";
import Footer from "@/components/global/footer";

export default function RootLayout({ children }) {
  return (
    <main>
      <div className='main blog-main'>
        <BlogHeader />
        {children}
        <Footer />
      </div>
    </main>
  );
}
