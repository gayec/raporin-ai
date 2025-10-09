export default function Footer() {
    return (
      <footer className="py-8 border-t text-center text-sm text-gray-500 bg-white">
        <p>© {new Date().getFullYear()} Raporin AI | Tüm hakları saklıdır.</p>
        <p className="mt-1">
          <a href="mailto:info@raporin.com" className="hover:text-[#17C6A3]">
            info@raporin.com
          </a>
        </p>
      </footer>
    );
  }
  