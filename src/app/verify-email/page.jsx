"use client";
import { useEffect, useState } from "react";

export default function VerifyEmailPage() {
  const [status, setStatus] = useState("checking"); // checking | success | error

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const token = query.get("token");

    if (!token) {
      setStatus("error");
      return;
    }

    fetch(`http://localhost:8081/api/email/verify-email?token=${token}`)
      .then(async (res) => {
        if (res.ok) {
          setStatus("success");
        } else {
          setStatus("error");
        }
      })
      .catch(() => setStatus("error"));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-50 px-4">
      {status === "checking" && <p className="text-gray-600">Doğrulama işlemi yapılıyor...</p>}
      {status === "success" && (
        <div>
          <h1 className="text-2xl font-bold text-teal-600 mb-3">✅ Hesabınız başarıyla aktifleştirildi!</h1>
          <p className="text-gray-700 mb-5">Artık Raporin uygulamasına giriş yapabilirsiniz.</p>
        </div>
      )}
      {status === "error" && (
        <div>
          <h1 className="text-2xl font-bold text-red-600 mb-3">❌ Doğrulama başarısız</h1>
          <p className="text-gray-700 mb-5">Token geçersiz veya süresi dolmuş olabilir.</p>
        </div>
      )}
    </div>
  );
}
