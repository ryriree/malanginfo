import { useState } from "react";
import home from "./assets/wajah-baru-alun-alun-tugu-malang_169.jpeg";
import button1 from "./assets/Icon.svg";
import info from "./assets/Info.svg";
import pantau from "./assets/pantau.svg";
import iconw from "./assets/icon warga.svg";
// ============================================================
// DATA
// ============================================================
const projects = [
  {
    id: 1,
    title: "Renovasi Taman Merdeka",
    status: "DIPROSES",
    statusColor: "#E8A838",
    location: "Alun-Alun Merdeka",
    progress: 85,
    kecamatan: "Klojen",
    tahun: "2026",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    category: "Infrastruktur",
    fullTitle: "Renovasi Taman Kota",
    description: "Proyek renovasi Taman Merdeka merupakan inisiatif strategis Pemerintah Kota Malang untuk memperindah ruang publik di pusat kota. Dengan penambahan taman bunga seluas 2 hektar dan penggantian sistem irigasi, diharapkan kawasan ini menjadi destinasi wisata kota yang lebih representatif. Selain renovasi taman, proyek ini juga mencakup modernisasi sistem pencahayaan taman menggunakan panel surya untuk menciptakan taman yang ramah lingkungan. Dampak yang diharapkan adalah peningkatan kunjungan wisatawan dan kualitas ruang terbuka hijau di Kota Malang.",
    estimasi: "15 Juni 2026",
    lastUpdate: "10 Mei 2026",
    timeline: [
      { date: "Januari 2026", label: "Perencanaan", done: true },
      { date: "Februari 2026", label: "Pengadaan", done: true },
      { date: "Mar - Mei 2026", label: "Tahap 1: Struktur", active: true },
      { date: "Juni 2026", label: "Tahap 2: Finishing", done: false },
    ],
    updates: [
      { date: "8 Mei 2026", title: "Pemasangan Lampu Taman", desc: "Instalasi lampu taman berbasis panel surya di sisi timur mencapai 80% pengerjaan." },
      { date: "10 Mei 2026", title: "Penanaman Pohon Penghijauan", desc: "Penanaman 200 pohon trembesi di jalur pejalan kaki taman selesai dilakukan." },
    ],
  },
  {
    id: 2,
    title: "Perluasan Jalan Soekarno Hatta",
    status: "DIPROSES",
    statusColor: "#E8A838",
    location: "Jl. Soekarno Hatta",
    progress: 40,
    kecamatan: "Lowokwaru",
    tahun: "2026",
    img: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=400&q=80",
    category: "Infrastruktur",
    fullTitle: "Perluasan Jalan Soekarno Hatta",
    description: "Proyek perluasan Jalan Soekarno Hatta merupakan upaya Pemerintah Kota Malang untuk mengatasi kemacetan yang semakin parah di koridor utama kota. Pelebaran jalan sebesar 3 meter pada masing-masing sisi diharapkan mampu meningkatkan kapasitas arus lalu lintas secara signifikan. Proyek ini juga mencakup pembangunan median jalan baru, perbaikan sistem drainase, serta pemasangan trotoar yang lebih lebar dan nyaman bagi pejalan kaki. Estimasi penyelesaian adalah akhir tahun 2026.",
    estimasi: "30 November 2026",
    lastUpdate: "9 Mei 2026",
    timeline: [
      { date: "Desember 2025", label: "Perencanaan", done: true },
      { date: "Februari 2026", label: "Pengadaan", done: true },
      { date: "Apr - Jul 2026", label: "Tahap 1: Struktur", active: true },
      { date: "Agustus 2026", label: "Tahap 2: Finishing", done: false },
    ],
    updates: [
      { date: "7 Mei 2026", title: "Pelebaran Sisi Barat", desc: "Pengerjaan pondasi sisi barat telah mencapai 60% dari total panjang jalan." },
      { date: "9 Mei 2026", title: "Pemasangan Drainase Baru", desc: "Saluran drainase bawah tanah sepanjang 500m berhasil dipasang." },
    ],
  },
  {
    id: 3,
    title: "Gedung Olahraga Internasional",
    status: "DIPROSES",
    statusColor: "#E8A838",
    location: "GOR Ken Arok",
    progress: 12,
    kecamatan: "Blimbing",
    tahun: "2026",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80",
    category: "Infrastruktur",
    fullTitle: "Pembangunan GOR Internasional",
    description: "Proyek pembangunan Gedung Olahraga Internasional merupakan proyek ambisius Pemerintah Kota Malang untuk meningkatkan fasilitas olahraga bertaraf internasional. Gedung ini dirancang dengan kapasitas 10.000 kursi penonton dan dilengkapi dengan fasilitas modern termasuk lapangan multifungsi, pusat pelatihan atlet, dan area pendukung lainnya. Proyek ini diharapkan dapat menjadikan Kota Malang sebagai tuan rumah berbagai event olahraga internasional.",
    estimasi: "31 Desember 2027",
    lastUpdate: "5 Mei 2026",
    timeline: [
      { date: "Maret 2026", label: "Perencanaan", done: true },
      { date: "April 2026", label: "Pengadaan", active: true },
      { date: "Mei - Des 2026", label: "Tahap 1: Pondasi", done: false },
      { date: "2027", label: "Tahap 2: Struktur", done: false },
    ],
    updates: [
      { date: "3 Mei 2026", title: "Persiapan Lahan", desc: "Pembersihan lahan dan pemetaan area konstruksi telah selesai dilakukan." },
      { date: "5 Mei 2026", title: "Pengadaan Material", desc: "Kontrak pengadaan material baja struktural telah ditandatangani." },
    ],
  },
  {
    id: 4,
    title: "Pembangunan Puskesmas Baru",
    status: "DIPROSES",
    statusColor: "#E8A838",
    location: "Kedungkandang",
    progress: 40,
    kecamatan: "Kedungkandang",
    tahun: "2026",
    img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400&q=80",
    category: "Kesehatan",
    fullTitle: "Pembangunan Puskesmas Baru Kedungkandang",
    description: "Pembangunan Puskesmas baru di Kecamatan Kedungkandang bertujuan untuk meningkatkan akses layanan kesehatan bagi masyarakat di wilayah timur Kota Malang. Fasilitas ini akan dilengkapi dengan ruang gawat darurat, laboratorium, apotek, dan ruang rawat inap untuk 20 pasien. Puskesmas baru ini diharapkan dapat melayani lebih dari 50.000 jiwa penduduk di wilayah sekitarnya.",
    estimasi: "31 Agustus 2026",
    lastUpdate: "8 Mei 2026",
    timeline: [
      { date: "Januari 2026", label: "Perencanaan", done: true },
      { date: "Maret 2026", label: "Pengadaan", done: true },
      { date: "Apr - Jul 2026", label: "Tahap 1: Struktur", active: true },
      { date: "Agustus 2026", label: "Tahap 2: Finishing", done: false },
    ],
    updates: [
      { date: "6 Mei 2026", title: "Pemasangan Rangka Atap", desc: "Struktur rangka atap sayap utara gedung telah selesai dipasang." },
      { date: "8 Mei 2026", title: "Pengerjaan Dinding", desc: "Pasangan bata dinding eksterior mencapai lantai 2 di semua sisi." },
    ],
  },
  {
    id: 5,
    title: "Perluasan Jembatan Tunggulmas",
    status: "SELESAI",
    statusColor: "#2E7D32",
    location: "Tlogomas - Saxophone",
    progress: 100,
    kecamatan: "Lowokwaru",
    tahun: "2025",
    img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&q=80",
    category: "Infrastruktur",
    fullTitle: "Perluasan Jembatan Tunggulmas",
    description: "Proyek perluasan Jembatan Tunggulmas telah berhasil diselesaikan pada awal 2025. Jembatan yang menghubungkan wilayah Tlogomas dan Saxophone ini kini memiliki kapasitas yang lebih besar dengan penambahan jalur kendaraan dan trotoar yang lebih lebar. Proyek ini juga dilengkapi dengan sistem penerangan LED yang hemat energi.",
    estimasi: "Maret 2025",
    lastUpdate: "1 Maret 2025",
    timeline: [
      { date: "Juni 2024", label: "Perencanaan", done: true },
      { date: "Agustus 2024", label: "Pengadaan", done: true },
      { date: "Sep 2024 - Feb 2025", label: "Konstruksi", done: true },
      { date: "Maret 2025", label: "Selesai", done: true },
    ],
    updates: [
      { date: "1 Maret 2025", title: "Proyek Selesai", desc: "Jembatan Tunggulmas resmi dibuka untuk umum setelah melalui uji kelayakan." },
    ],
  },
  {
    id: 6,
    title: "Renovasi Sekolah",
    status: "SELESAI",
    statusColor: "#E8A838",
    location: "SDN 1 Lowokwaru",
    progress: 100,
    kecamatan: "Lowokwaru",
    tahun: "2026",
    img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&q=80",
    category: "Pendidikan",
    fullTitle: "Renovasi SDN 1 Lowokwaru",
    description: "Proyek renovasi SDN 1 Lowokwaru mencakup perbaikan menyeluruh gedung sekolah yang sudah berusia lebih dari 30 tahun. Renovasi meliputi perbaikan atap, penggantian kusen dan jendela, pengecatan ulang, serta peningkatan fasilitas toilet dan ruang kelas. Tujuannya adalah menciptakan lingkungan belajar yang lebih nyaman dan aman bagi siswa.",
    estimasi: "30 Juni 2026",
    lastUpdate: "10 Mei 2026",
    timeline: [
      { date: "Februari 2026", label: "Perencanaan", done: true },
      { date: "Maret 2026", label: "Pengadaan", done: true },
      { date: "Apr - Mei 2026", label: "Renovasi Utama", active: true },
      { date: "Juni 2026", label: "Finishing", done: false },
    ],
    updates: [
      { date: "8 Mei 2026", title: "Pengecatan Eksterior", desc: "Pengecatan dinding eksterior seluruh gedung telah selesai 95%." },
      { date: "10 Mei 2026", title: "Pemasangan Plafon", desc: "Penggantian plafon 8 ruang kelas telah diselesaikan." },
    ],
  },
  {
    id: 7,
    title: "Perluasan Jalan Sigura-gura",
    status: "DIPROSES",
    statusColor: "#E8A838",
    location: "Kec. Lowokwaru, Kota Malang",
    progress: 75,
    kecamatan: "Lowokwaru",
    tahun: "2026",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80",
    category: "Infrastruktur",
    fullTitle: "Perluasan Jalan Sigura-gura",
    description: "Proyek perluasan Jalan Utama Sigura-gura merupakan inisiatif strategis Pemerintah Kota Malang untuk mengurai kemacetan kronis yang sering terjadi di kawasan pendidikan ini. Dengan penambahan lebar jalan sebesar 4 meter pada masing-masing sisi, diharapkan arus lalu lintas dari dan menuju area kampus akan menjadi lebih lancar.\n\nSelain perluasan aspal, proyek ini juga mencakup modernisasi sistem drainase bawah tanah untuk mencegah genangan air saat musim hujan, serta pembangunan trotoar ramah disabilitas yang dilengkapi dengan guiding block dan pencahayaan jalan berbasis panel surya.\n\nDampak yang diharapkan adalah peningkatan efisiensi waktu tempuh bagi masyarakat dan penguatan ekonomi lokal di sepanjang Sigura-gura.",
    estimasi: "28 Juli 2026",
    lastUpdate: "10 Mei 2026",
    timeline: [
      { date: "April 2026", label: "Perencanaan", done: true },
      { date: "April 2026", label: "Pengadaan", done: true },
      { date: "Mei - Juni 2026", label: "Tahap 1: Struktur", active: true },
      { date: "Juli 2026", label: "Tahap 2: Finishing", done: false },
    ],
    updates: [
      { date: "5 Mei 2026", title: "Pemasangan Box Culvert", desc: "Pemasangan saluran drainase utama di sisi barat telah mencapai 90% pengerjaan." },
      { date: "10 Mei 2026", title: "Pelebaran Bahu Jalan", desc: "Pembersihan lahan dan pengerukan tanah untuk fondasi trotoar baru." },
    ],
  },
  {
    id: 8,
    title: "Perbaikan Jalan Utama",
    status: "PERENCANAAN",
    statusColor: "var(--primary)",
    location: "Jl. Ijen Boulevard",
    progress: 5,
    kecamatan: "Klojen",
    tahun: "2026",
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&q=80",
    category: "Infrastruktur",
    fullTitle: "Perbaikan Jalan Ijen Boulevard",
    description: "Proyek perbaikan Jalan Ijen Boulevard mencakup penambalan lubang, pelapisan ulang aspal, dan perbaikan marka jalan di sepanjang koridor utama ini. Jalan Ijen merupakan salah satu ikon Kota Malang sehingga kualitas jalannya perlu dijaga dengan baik.",
    estimasi: "31 Oktober 2026",
    lastUpdate: "1 Mei 2026",
    timeline: [
      { date: "Mei 2026", label: "Perencanaan", active: true },
      { date: "Juni 2026", label: "Pengadaan", done: false },
      { date: "Jul - Sep 2026", label: "Konstruksi", done: false },
      { date: "Oktober 2026", label: "Selesai", done: false },
    ],
    updates: [
      { date: "1 Mei 2026", title: "Survey Lapangan", desc: "Tim teknis melakukan survey kondisi jalan untuk menyusun rencana perbaikan." },
    ],
  },
  {
    id: 9,
    title: "Renovasi Gedung Olahraga",
    status: "SELESAI",
    statusColor: "#2E7D32",
    location: "GOR Ken Arok",
    progress: 100,
    kecamatan: "Blimbing",
    tahun: "2025",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80",
    category: "Olahraga",
    fullTitle: "Renovasi GOR Ken Arok",
    description: "Renovasi GOR Ken Arok mencakup perbaikan atap, penggantian kursi penonton, pengecatan ulang fasilitas, serta peningkatan sistem pencahayaan dan ventilasi. GOR ini kini siap digunakan untuk berbagai event olahraga regional.",
    estimasi: "Desember 2025",
    lastUpdate: "15 Desember 2025",
    timeline: [
      { date: "Juli 2025", label: "Perencanaan", done: true },
      { date: "Agustus 2025", label: "Pengadaan", done: true },
      { date: "Sep - Nov 2025", label: "Renovasi", done: true },
      { date: "Desember 2025", label: "Selesai", done: true },
    ],
    updates: [
      { date: "15 Desember 2025", title: "Serah Terima", desc: "GOR Ken Arok resmi diserahterimakan kepada Dinas Pemuda dan Olahraga." },
    ],
  },
];

const news = [
  {
    id: 1,
    category: "EVENT KOTA",
    categoryColor: "#9CC6FF",
    categoryBg: "#0C528F",
    title: "Peringatan HUT Kota Malang Ke-111 Berlangsung Meriah",
    date: "1 April 2026",
    img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
    content: `MALANG – Peringatan Hari Ulang Tahun (HUT) Kota Malang yang ke-111 berlangsung dengan penuh kemeriahan dan antusias dari masyarakat. Berbagai rangkaian kegiatan digelar selama sepekan penuh, mulai dari upacara resmi di Balai Kota, pameran budaya, hingga pertunjukan seni yang memukau.

Wali Kota Malang dalam sambutannya mengajak seluruh warga untuk terus bersemangat membangun kota dengan semangat kebersamaan dan inovasi. Beliau menegaskan bahwa Kota Malang akan terus berkembang menjadi kota yang lebih modern, inklusif, dan berkelanjutan.

Ribuan warga tumpah ruah ke alun-alun kota untuk menyaksikan berbagai penampilan seni budaya dari pelajar dan komunitas lokal. Pameran UMKM yang digelar di sepanjang jalan sekitar alun-alun juga menjadi daya tarik tersendiri dengan lebih dari 200 stan yang memamerkan produk-produk unggulan Kota Malang.

Selain itu, kegiatan bakti sosial seperti donor darah massal, pemeriksaan kesehatan gratis, dan pembagian sembako kepada warga kurang mampu juga turut mewarnai rangkaian peringatan HUT ini. Pemerintah Kota Malang berharap momentum ini dapat mempererat tali persaudaraan antar warga dan mendorong partisipasi aktif masyarakat dalam pembangunan kota.

Puncak peringatan ditandai dengan pesta kembang api spektakuler di langit Kota Malang yang disaksikan oleh puluhan ribu warga. Momen ini menjadi simbol semangat dan harapan Kota Malang untuk terus maju dan berkembang di masa mendatang.`,
  },
  {
    id: 2,
    category: "TRANSPORTASI",
    categoryColor: "#003C88",
    categoryBg: "#83AAFD",
    title: "Trans Jatim Mulai Beroperasi di Kota Malang",
    date: "21 Februari 2026",
    img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80",
    content: `MALANG – Kemudahan akses menuju berbagai destinasi wisata di Kota Batu kini semakin didukung oleh layanan Bus Trans Jatim Koridor 1 Malang Raya. Selain menawarkan tarif yang terjangkau, layanan transportasi massal ini juga memberikan kemudahan bagi masyarakat dan wisatawan karena menjangkau sejumlah lokasi wisata populer di kawasan Batu.

Beberapa destinasi wisata yang dapat diakses melalui layanan ini antara lain Batu Ekonomis Park, Batu Night Spectacular (BNS), serta Jawa Timur Park 2 yang mencakup Museum Satwa dan Batu Secret Zoo. Kehadiran layanan ini diharapkan mampu menjadi alternatif transportasi yang lebih praktis bagi masyarakat, khususnya bagi wisatawan yang ingin berkunjung tanpa menggunakan kendaraan pribadi.

Kepala Seksi Sarana Angkutan Jalan Dinas Perhubungan Jawa Timur menyampaikan bahwa layanan Trans Jatim tidak hanya berfungsi sebagai moda transportasi umum, tetapi juga mendukung sektor pariwisata di kawasan Malang Raya. Oleh karena itu, beberapa rute dirancang agar dapat menjangkau area wisata lebih dekat sehingga perjalanan menjadi lebih mudah dan nyaman bagi masyarakat.

Selain memberikan kemudahan akses, jalur Trans Jatim menuju kawasan wisata memanfaatkan rute melalui wilayah Tlekung dan Oro-oro Ombo sebagai alternatif untuk mengurangi kepadatan kendaraan di pusat Kota Batu, terutama saat akhir pekan dan musim liburan. Langkah tersebut juga diharapkan dapat membantu mengurangi kemacetan yang selama ini sering terjadi akibat tingginya penggunaan kendaraan pribadi.

Di sisi lain, layanan Trans Jatim telah dilengkapi dengan berbagai fasilitas pendukung seperti pendingin udara (AC), sistem pembayaran non-tunai, serta fitur pelacakan armada secara real-time melalui aplikasi resmi Trans Jatim. Fasilitas tersebut diharapkan dapat meningkatkan kenyamanan pengguna selama perjalanan.

Pemerintah Provinsi Jawa Timur berharap pengembangan transportasi publik terintegrasi seperti Trans Jatim dapat terus mendukung sektor pariwisata sekaligus menciptakan sistem mobilitas yang lebih tertata, efisien, dan ramah lingkungan di kawasan Malang Raya.`,
  },
];

const kecamatanList = ["Semua Kecamatan", "Blimbing", "Kedungkandang", "Klojen", "Lowokwaru", "Sukun"];


// ============================================================
// SHARED COMPONENTS
// ============================================================
const statusStyle = (status) => {
  const map = {
    DIPROSES: { bg:"#6B5828", color: "var(--surface)" },
    SELESAI: { bg: "#727781", color: "var(--surface)" },
    PERENCANAAN: { bg: "#374151", color: "var(--surface)" },
  };
  return map[status] || { bg: "#eee", color: "#555" };
};

function Navbar({ page, setPage }) {
  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 100,
      background: "var(--surface)", borderBottom: "1px solid #e8e8e8",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 40px", height: 60,
    }}>
      <span
        onClick={() => setPage({ name: "home" })}
        style={{fontWeight: 700, fontSize: 20, color: "var(--primary)", cursor: "pointer" }}
      >MalaNginfo</span>
      <div style={{ display: "flex", gap: 28 }}>
        <span
          onClick={() => setPage({ name: "home" })}
          style={{ fontSize: 14, fontWeight: page.name === "home" ? 700 : 400, color: page.name === "home" ? "var(--primary)" : "#555", cursor: "pointer", borderBottom: page.name === "home" ? "2px solid var(--primary)" : "none", paddingBottom: 2 }}
        >Home</span>
        <span
          onClick={() => setPage({ name: "laporan" })}
          style={{ fontSize: 14, fontWeight: page.name === "laporan" ? 700 : 400, color: page.name === "laporan" ? "var(--primary)" : "#555", cursor: "pointer", borderBottom: page.name === "laporan" ? "2px solid var(--primary)" : "none", paddingBottom: 2 }}
        >Laporan</span>
      </div>
    </nav>
  );
}

function Footer({ setPage }) {
  return (
    <footer style={{ background: "var(--primary)", color: "var(--surface)", padding: "48px 40px 24px" }}>
      <div style={{ display: "flex", gap: 60, flexWrap: "wrap", marginBottom: 40 }}>
        <div style={{ maxWidth: 260 }}>
          <div style={{fontWeight: 700, fontSize: 22, marginBottom: 12 }}>MalaNginfo</div>
          <p style={{ fontSize: 13, lineHeight: 1.7, color: "#a8bfd4", margin: 0 }}>
            Sumber informasi dan layanan pelaporan masyarakat untuk mendukung Kota Malang yang lebih informatif dan terhubung
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
            <span style={{ width: 32, height: 32, border: "1px solid #3a5570", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 14 }}>🌐</span>
            <span style={{ width: 32, height: 32, border: "1px solid #3a5570", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 14 }}>✉</span>
          </div>
        </div>
        <div style={{ display: "flex", gap: 60, flexWrap: "wrap" }}>
          {[
            { title: "Navigasi", links: ["Tentang Kami", "Berita Kota"] },
            { title: "Layanan", links: ["Layanan Pengaduan", "Daftar Proyek"] },
            { title: "Legal", links: ["Kebijakan Privasi", "Kontak"] },
          ].map(col => (
            <div key={col.title}>
              <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 12, color: "var(--surface)" }}>{col.title}</div>
              {col.links.map(l => (
                <div key={l} style={{ fontSize: 13, color: "#a8bfd4", marginBottom: 8, cursor: "pointer" }}>{l}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div style={{ borderTop: "1px solid #2d4d6e", paddingTop: 20, textAlign: "center", fontSize: 12, color: "#6a8aaa" }}>
        © 2026 MalaNginfo. All rights reserved. Sistem Informasi Kota Malang
      </div>
    </footer>
  );
}

function ProgressBar({ value, color = "linear-gradient(to right, #003B6B, #FACC15)" }) {
  return (
    <div style={{ background: "#e0e7ef", borderRadius: 4, height: 6, overflow: "hidden", width: "100%" }}>
      <div style={{ width: `${value}%`, height: "100%", background: color, borderRadius: 4, transition: "width 0.6s ease" }} />
    </div>
  );
}

// ============================================================
// PAGE: HOME
// ============================================================
function HomePage({ setPage }) {
  return (
    <div>
      {/* Hero */}
      <div style={{
        position: "relative", minHeight: 500,
        background: "linear-gradient(135deg, #003B6B 75%, #003B6B 85%)",
        display: "flex", alignItems: "center", overflow: "hidden"
      }}>
        <img
          src={home}
          alt=""
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.25 }}
        />
        <div style={{ position: "relative", padding: "80px 40px", maxWidth: 850 }}>
          <h1 style={{fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, color: "var(--surface)", lineHeight: 1.25, margin: "0 0 16px" }}>
            Tetap Terhubung dengan Kabar dan Kondisi Kota Malang
          </h1>
          <p style={{ color: "var(--surface)", fontSize: 15, lineHeight: 1.7, marginBottom: 28 }}>
            Portal informasi pembangunan dan layanan publik Kota Malang untuk
            <br />
            mendorong partisipasi masyarakat yang lebih aktif
          </p>
          <button
            onClick={() => setPage({ name: "laporan" })}
            style={{ background: "var(--accent)", color: "#9CC6FF", border: "none", borderRadius: 8, padding: "12px 24px", fontSize: 14, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}
          >
            <img src={button1}
            />

            Buat Laporan
          </button>
        </div>
      </div>

      {/* Feature cards */}
      <div style={{ background: "var(--canvas)", padding: "40px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 30, maxWidth: 1000, margin: "0 auto" }}>
          {[
            { icon: info, title: "Lapor Fasilitas", desc: "Laporkan kerusakan jalan, fasilitas publik, atau gangguan layanan langsung ke instansi terkait", cta: "Mulai Melapor →", action: () => setPage({ name: "laporan" }) },
            { icon: pantau, title: "Pantau Pembangunan", desc: "Lihat real-time progress pembangunan di sekitar Anda dengan data yang akurat dan mudah diakses", cta: "Lihat Proyek →", action: () => setPage({ name: "daftar" }) },
          ].map(card => (
            <div key={card.title} style={{ background: "var(--surface)", borderRadius: 12, padding: 28, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <div style={{ width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, marginBottom: 16 }}>
                <img
  src={card.icon}
  alt=""
  style={{
    width: 34,
    height: 34,
    objectFit: "contain"
  }}
/>
              </div>
              <h3 style={{fontSize: 18, fontWeight: 700, margin: "0 0 8px", color: "var(--primary)" }}>{card.title}</h3>
              <p style={{ fontSize: 13, color: "#667", lineHeight: 1.6, margin: "0 0 16px" }}>{card.desc}</p>
              <span onClick={card.action} style={{ fontSize: 13, color: "var(--primary)", fontWeight: 600, cursor: "pointer" }}>{card.cta}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Proyek Strategis */}
      <div style={{ background: "#EFF3FF", padding: "48px 40px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 8, maxWidth: 900, margin: "0 auto 24px" }}>
          <div>
            <h2 style={{fontSize: 26, fontWeight: 700, color: "var(--primary)", margin: 0 }}>Proyek Strategis Terbaru</h2>
            <p style={{ fontSize: 13, color: "#889", margin: "4px 0 0" }}>Update terkini pengerjaan infrastruktur utama di Kota Malang</p>
          </div>
          <span onClick={() => setPage({ name: "daftar" })} style={{ fontSize: 13, color: "var(--primary)", fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap" }}>Semua Proyek ↗</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, maxWidth: 900, margin: "0 auto" }}>
          {projects.slice(0, 3).map(p => {
            const st = statusStyle(p.status);
            return (
              <div key={p.id} style={{ border: "1px solid #eee", borderRadius: 12, overflow: "hidden", background: "var(--surface)", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
                <img src={p.img} alt={p.title} style={{ width: "100%", height: 160, objectFit: "cover" }} />
                <div style={{ padding: 16 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                    <span style={{ fontSize: 14, fontWeight: 600, color: "var(--primary)", lineHeight: 1.3, minHeight: 38,
    display: "block"}}>{p.title}</span>
                    <span style={{ fontSize: 9, fontWeight: 700, background: st.bg, color: st.color, borderRadius: "999px", padding: "2px 7px", whiteSpace: "nowrap", marginLeft: 8,  minWidth: 70,          // ← lebar minimum badge
  minHeight: 22,  display: "inline-flex", alignItems: "center",  justifyContent: "center"}}>{p.status}</span>
                  </div>
                  <p style={{ fontSize: 12, color: "#888", margin: "0 0 8px" }}>Progress Pengerjaan</p>
                  <ProgressBar value={p.progress} />
                  <p style={{ fontSize: 12, color: "#555", margin: "4px 0 12px", textAlign: "right" }}>{p.progress}%</p>
                  <button
                    onClick={() => setPage({ name: "detail", id: p.id })}
                    style={{ width: "100%", background: "var(--primary)", color: "var(--surface)", border: "none", borderRadius: 8, padding: "10px", fontSize: 13, fontWeight: 600, cursor: "pointer" }}
                  >Lihat Detail</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Berita */}
      <div style={{ background: "var(--canvas)", padding: "48px 40px" }}>
        <h2 style={{fontSize: 26, fontWeight: 700, color: "var(--primary)", marginBottom: 24, maxWidth: 900, margin: "0 auto 24px" }}>Berita & Informasi</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, maxWidth: 900, margin: "0 auto" }}>
          {news.map(n => (
            <div key={n.id} style={{ background: "var(--surface)", borderRadius: 12, overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
              <img src={n.img} alt={n.title} style={{ width: "100%", height: 180, objectFit: "cover" }} />
              <div style={{ padding: 16 }}>
                <span style={{ fontSize: 10, fontWeight: 700, background: n.categoryBg, color: n.categoryColor, borderRadius: "999px", padding: "3px 10px" }}>{n.category}</span>
                <h3 style={{ fontSize: 15, fontWeight: 600, color: "var(--primary)", margin: "10px 0 4px", lineHeight: 1.4 }}>{n.title}</h3>
                <p style={{ fontSize: 12, color: "#888", margin: "0 0 12px" }}>{n.date}</p>
                <span onClick={() => setPage({ name: "berita", id: n.id })} style={{ fontSize: 13, color: "var(--primary)", fontWeight: 600, cursor: "pointer" }}>Baca Selengkapnya →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================================
// PAGE: DAFTAR KEGIATAN PEMBANGUNAN
// ============================================================
function DaftarPage({ setPage }) {
  const [kecamatan, setKecamatan] = useState("Semua Kecamatan");
  const [tahun, setTahun] = useState("2026");
  const [search, setSearch] = useState("");
  const [shown, setShown] = useState(6);

  const filtered = projects.filter(p => {
    const matchK = kecamatan === "Semua Kecamatan" || p.kecamatan === kecamatan;
    const matchT = !tahun || p.tahun === tahun;
    const matchS = !search || p.title.toLowerCase().includes(search.toLowerCase());
    return matchK && matchT && matchS;
  });

  return (
    <div>
      {/* Hero */}
      <div style={{background: "#f5f0e8", padding: "24px 40px 0" }}>
         <div style={{ position: "relative", background: "var(--primary)", minHeight: 250, display: "flex", alignItems: "center", overflow: "hidden", borderRadius: 16 }}>
        <img src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=1200&q=60" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.2 }} />
        <div style={{ position: "relative", padding: "40px" }}>
          <h1 style={{fontSize: "clamp(24px, 4vw, 40px)", fontWeight: 700, color: "var(--surface)", margin: "0 0 12px" }}>Daftar Kegiatan <br></br> Pembangunan</h1>
          <p style={{ color: "#a8d0f0", fontSize: 14, margin: 0, maxWidth: 520 }}>Pantau dan telusuri seluruh proyek pembangunan infrastruktur serta fasilitas publik di Kota Malang secara real-time</p>
        </div>
      </div>
    </div>
      {/* Filter */}
      <div style={{ background: "var(--canvas)", padding: "24px 40px" }}>
        <div style={{ background: "#EFF3FF", borderRadius: 12, padding: "20px 24px",  display: "flex", gap: 16, alignItems: "flex-end", flexWrap: "wrap" }}>
          <div style={{ flex: "0 0 180px" }}>
            <label style={{ fontSize: 12, color: "#666", display: "block", marginBottom: 6 }}>Kecamatan</label>
            <select value={kecamatan} onChange={e => setKecamatan(e.target.value)} style={{ width: "100%", padding: "10px 12px", border: "1px solid #ddd", borderRadius: 8, fontSize: 13, background: "var(--surface)" }}>
              {kecamatanList.map(k => <option key={k}>{k}</option>)}
            </select>
          </div>
          <div style={{ flex: "0 0 140px" }}>
            <label style={{ fontSize: 12, color: "#666", display: "block", marginBottom: 6 }}>Tahun</label>
            <select value={tahun} onChange={e => setTahun(e.target.value)} style={{ width: "100%", padding: "10px 12px", border: "1px solid #ddd", borderRadius: 8, fontSize: 13, background: "var(--surface)" }}>
              <option value="">Semua</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
            </select>
          </div>
          <div style={{ flex: 1, minWidth: 200 }}>
            <label style={{ fontSize: 12, color: "#666", display: "block", marginBottom: 6 }}>Masukan Judul Laporan</label>
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Cari pembangunan fasilitas..." style={{ width: "100%", padding: "10px 12px", border: "1px solid #ddd", borderRadius: 8, fontSize: 13, boxSizing: "border-box" }} />
          </div>
          <button style={{ background: "var(--primary)", color: "var(--surface)", border: "none", borderRadius: 8, padding: "10px 24px", fontSize: 13, fontWeight: 600, cursor: "pointer", height: 40 }}>🔍 Cari</button>
        </div>
      </div>

      {/* Grid */}
      <div style={{ background: "var(--canvas)", padding: "0 40px 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, maxWidth: 900, margin: "0 auto" }}>
          {filtered.slice(0, shown).map(p => {
            const st = statusStyle(p.status);
            const barColor = p.progress <100 ? p.progressBar : "#315CAA";
            return (
              <div key={p.id} style={{ background: "var(--surface)", borderRadius: 12, overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
                <div style={{ display: "flex", gap: 12, padding: 14 }}>
                  <img src={p.img} alt={p.title} style={{ width: 72, height: 72, objectFit: "cover", borderRadius: 8, flexShrink: 0 }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 6 }}>
                      <span style={{ fontSize: 13, fontWeight: 700, color: "var(--primary)", lineHeight: 1.3 }}>{p.title}</span>
                      <span style={{ fontSize: 9, fontWeight: 700, background: st.bg, color: st.color, borderRadius: "999px", padding: "3px 10px", whiteSpace: "nowrap" }}>{p.status}</span>
                    </div>
                    <p style={{ fontSize: 11, color: "#888", margin: "4px 0 0" }}>Lokasi: {p.location}</p>
                  </div>
                </div>
                <div style={{ padding: "0 14px 14px" }}>
                  <p style={{ fontSize: 11, color: barColor, fontWeight: 600, margin: "0 0 4px" }}>{p.progress}% Selesai</p>
                  <ProgressBar value={p.progress} color={barColor} />
                  <button
                    onClick={() => setPage({ name: "detail", id: p.id })}
                    style={{ width: "100%", background: "var(--primary)", color: "var(--surface)", border: "none", borderRadius: 8, padding: "9px", fontSize: 12, fontWeight: 600, cursor: "pointer", marginTop: 12 }}
                  >Lihat Detail</button>
                </div>
              </div>
            );
          })}
        </div>
        {shown < filtered.length && (
          <div style={{ textAlign: "center", marginTop: 28 }}>
            <button onClick={() => setShown(s => s + 3)} style={{ background: "transparent", border: "1.5px solid var(--primary)", color: "var(--primary)", borderRadius: "999px", padding: "10px 32px", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
              Muat Lebih Banyak
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================================
// PAGE: DETAIL KEGIATAN
// ============================================================
function DetailPage({ projectId, setPage }) {
  const p = projects.find(x => x.id === projectId) || projects[6];
  const barColor = p.progress <100 ? p.progressBar : "#315CAA";
  const photoUrls = [
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=200&q=70",
    "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=200&q=70",
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=200&q=70",
    "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=200&q=70",
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=200&q=70",
    "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=200&q=70",
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=200&q=70",
  ];

  return (
    <div>
      {/* Hero */}
      <div style={{ background: "#f5f0e8", padding: "24px 40px 0" }}>
      <div style={{ position: "relative", height: 280, borderRadius: 16, overflow: "hidden" }}>
        <img src={p.img} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,30,60,0.85) 0%, rgba(0,0,0,0.2) 100%)" }} />
        <div style={{ position: "absolute", bottom: 24, left: 40 }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 11, fontWeight: 600, background: "var(--warning)", color: "var(--surface)", borderRadius: "999px", padding: "3px 8px" }}>Diproses</span>
            <span style={{ fontSize: 11, fontWeight: 600, background: "rgba(255,255,255,0.2)", color: "var(--surface)", borderRadius: "999px", padding: "3px 8px" }}>Infrastruktur</span>
          </div>
          <h1 style={{ fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 700, color: "var(--surface)", margin: "0 0 8px" }}>{p.fullTitle}</h1>
          <p style={{ fontSize: 13, color: "#c8dff0", margin: 0 }}>📍 {p.location}, Kota Malang, Jawa Timur</p>
        </div>
      </div>
    </div>

      {/* Content */}
      <div style={{ background: "#f5f0e8", padding: "32px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 24, maxWidth: 1000, margin: "0 auto" }}>
          {/* Left */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Progress */}
            <div style={{ background: "var(--surface)", borderRadius: 12, padding: 24, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 4 }}>
                <div>
                  <h3 style={{color: "var(--primary)", fontSize: 17, fontWeight: 700, margin: 0 }}>Ringkasan Progres</h3>
                  <p style={{ fontSize: 12, color: "#888", margin: "4px 0 16px" }}>Update terakhir: {p.lastUpdate}</p>
                </div>
                <div style={{ background: "#E3F2FD", borderRadius: 8, padding: "8px 14px", textAlign: "center" }}>
                  <p style={{ fontSize: 10, color: "var(--primary)", margin: "0 0 2px" }}>📅 ESTIMASI SELESAI</p>
                  <p style={{ fontSize: 12, fontWeight: 700, color: "var(--primary)", margin: 0 }}>{p.estimasi}</p>
                </div>
              </div>
              <div style={{ fontSize: 48, fontWeight: 800, color: "var(--primary)", lineHeight: 1, marginBottom: 8 }}>{p.progress}%</div>
              <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 6 }}>
                <span style={{ fontSize: 12, color: "#888" }}>Selesai</span>
              </div>
              <ProgressBar value={p.progress} color={barColor} />
              <p style={{ fontSize: 13, color: "#555", fontStyle: "italic", marginTop: 12, padding: "10px 14px", background: "#f9f9f9", borderRadius: 8, borderLeft: "3px solid #ddd" }}>
                "{p.updates[0]?.desc}"
              </p>
            </div>

            {/* Deskripsi */}
            <div style={{ background: "var(--surface)", borderRadius: 12, padding: 24, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
              <h3 style={{color: "var(--primary)", fontSize: 17, fontWeight: 700, margin: "0 0 16px" }}>Deskripsi Proyek</h3>
              {p.description.split("\n\n").map((para, i) => (
                <p key={i} style={{ fontSize: 13, color: "#444", lineHeight: 1.75, margin: "0 0 12px" }}>{para}</p>
              ))}
            </div>

            {/* Dokumentasi */}
            <div style={{ background: "var(--surface)", borderRadius: 12, padding: 24, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <h3 style={{color: "var(--primary)", fontSize: 17, fontWeight: 700, margin: 0 }}>Dokumentasi Lapangan</h3>
                <span style={{ fontSize: 13, color: "var(--primary)", cursor: "pointer" }}>Lihat Semua →</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8 }}>
                {photoUrls.slice(0, 7).map((url, i) => (
                  i === 6
                    ? <div key={i} style={{ aspectRatio: "1", borderRadius: 8, background: "var(--primary)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "var(--surface)", cursor: "pointer" }}>
                        <span style={{ fontSize: 20 }}>📷</span>
                        <span style={{ fontSize: 12, fontWeight: 700, marginTop: 4 }}>+12 Foto</span>
                      </div>
                    : <img key={i} src={url} alt="" style={{ width: "100%", aspectRatio: "1", objectFit: "cover", borderRadius: 8 }} />
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Timeline */}
            <div style={{ background: "var(--surface)", borderRadius: 12, padding: 24, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
              <h3 style={{color: "var(--primary)", fontSize: 17, fontWeight: 700, margin: "0 0 20px" }}>Timeline Proyek</h3>
              <div style={{ position: "relative", paddingLeft: 28 }}>
                <div style={{ position: "absolute", left: 10, top: 8, bottom: 8, width: 2, background: "#e0e7ef" }} />
                {p.timeline.map((t, i) => (
                  <div key={i} style={{ marginBottom: 20, position: "relative" }}>
                    <div style={{
                      position: "absolute", left: -22, top: 4, width: 14, height: 14, borderRadius: "50%",
                      background: t.done ? "var(--primary)" : t.active ? "var(--primary)" : "#e0e7ef",
                      border: t.active ? "3px solid #a8d0f0" : "2px solid var(--surface)",
                      boxShadow: "0 0 0 2px " + (t.done || t.active ? "var(--primary)" : "#e0e7ef"),
                    }} />
                    <div style={{
                      background: t.active ? "var(--primary)" : t.done ? "#E3F2FD" : "#f5f5f5",
                      borderRadius: 8, padding: "8px 12px",
                    }}>
                      <p style={{ fontSize: 11, color: t.active ? "#a8d0f0" : "#888", margin: "0 0 2px" }}>{t.date}</p>
                      <p style={{ fontSize: 12, fontWeight: 600, color: t.active ? "var(--surface)" : t.done ? "var(--primary)" : "#999", margin: 0 }}>{t.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Update */}
            <div style={{ background: "var(--surface)", borderRadius: 12, padding: 24, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
              <h3 style={{ color: "var(--primary)", fontSize: 17, fontWeight: 700, margin: "0 0 16px" }}>Update Terbaru</h3>
              {p.updates.map((u, i) => (
                <div key={i} style={{ marginBottom: 16, borderLeft: "3px solid #e0e7ef", paddingLeft: 12 }}>
                  <p style={{ fontSize: 11, color: "#888", margin: "0 0 2px" }}>{u.date}</p>
                  <p style={{ fontSize: 13, fontWeight: 700, color: "var(--primary)", margin: "0 0 4px" }}>{u.title}</p>
                  <p style={{ fontSize: 12, color: "#555", lineHeight: 1.6, margin: 0 }}>{u.desc}</p>
                </div>
              ))}
              <button style={{ width: "100%", background: "transparent", border: "1.5px solid var(--primary)", color: "var(--primary)", borderRadius: 8, padding: "10px", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
                Lihat Log Lengkap
              </button>
            </div>

            {/* Ada Kendala */}
            <div style={{ background: "var(--primary)", borderRadius: 12, padding: 24 }}>
              <h3 style={{ color: "var(--surface)", fontSize: 16, fontWeight: 700, margin: "0 0 8px" }}>Ada Kendala?</h3>
              <p style={{ fontSize: 12, color: "#a8d0f0", lineHeight: 1.6, margin: "0 0 16px" }}>
                Laporkan jika Anda menemukan masalah pengerjaan atau gangguan lalu lintas di sekitar lokasi
              </p>
              <button
                onClick={() => setPage({ name: "laporan" })}
                style={{ width: "100%", background: "#FFDCC5", color: "#301400", border: "none", borderRadius: 8, padding: "11px", fontSize: 13, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
              >
                <img src={iconw} style={{ width: 16, height: 16 }}
            />  Buat Laporan Warga
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// PAGE: BERITA
// ============================================================
function BeritaPage({ newsId }) {
  const n = news.find(x => x.id === newsId) || news[1];
  return (
    <div>
      <div style={{ padding: "32px 40px 0", background: "#f5f0e8" }}>
        <div style={{ position: "relative", maxWidth: 780, margin: "0 auto" }}>
        <img src={n.img} alt={n.title} style={{ width: "100%", height: 300, objectFit: "cover", borderRadius: 16 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,30,60,0.8) 0%, rgba(0,0,0,0.2) 60%)", borderRadius: 16 }} />
        <div style={{ position: "absolute", bottom: 28, left: 40, right: 40 }}>
          <h1 style={{fontSize: "clamp(20px, 3vw, 32px)", fontWeight: 700, color: "var(--surface)", margin: "0 0 8px", maxWidth: 700, lineHeight: 1.3 }}>{n.title}</h1>
          <p style={{ fontSize: 13, color: "#c8dff0", margin: 0 }}>{n.date}</p>
        </div>
      </div>
    </div>
      <div style={{ background: "#f5f0e8", padding: "32px 40px 60px" }}>
        <div style={{ background: "var(--surface)", borderRadius: 12, padding: 32, maxWidth: 780, margin: "0 auto", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
          <h3 style={{color: "var(--primary)", fontSize: 16, fontWeight: 700, margin: "0 0 20px" }}>Isi Berita</h3>
          {n.content.split("\n\n").map((para, i) => (
            <p key={i} style={{ fontSize: 14, color: "#333", lineHeight: 1.8, margin: "0 0 16px" }}>{para}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================================
// PAGE: LAPORAN
// ============================================================
function LaporanPage() {
  const [form, setForm] = useState({ judul: "", kategori: "", kecamatan: "", kelurahan: "", detail: "" });
  const [submitted, setSubmitted] = useState(false);

  const kelurahanMap = {
    Blimbing: ["Blimbing", "Balearjosari", "Arjosari", "Polowijen", "Purwodadi", "Bunulrejo", "Kesatrian", "Polehan", "Pandanwangi", "Pinangbend"],
    Kedungkandang: ["Kedungkandang", "Arjowinangun", "Bumiayu", "Cemorokandang", "Kotalama", "Lesanpuro", "Madyopuro", "Mergosono", "Sawojajar", "Tlogowaru", "Wonokoyo"],
    Klojen: ["Klojen", "Bareng", "Gadingkasri", "Kasin", "Kauman", "Kiduldalem", "Oro-oro Dowo", "Penanggungan", "Rampalcelaket", "Samaan", "Sukoharjo"],
    Lowokwaru: ["Lowokwaru", "Dinoyo", "Jatimulyo", "Ketawanggede", "Merjosari", "Mojolangu", "Sumbersari", "Tasikmadu", "Tlogomas", "Tunggulwulung"],
    Sukun: ["Sukun", "Bandungrejosari", "Bakalankrajan", "Ciptomulyo", "Gadang", "Kebonsari", "Mulyorejo", "Pisangcandi", "Tanjungrejo", "Karangbesuki"],
  };

  const handleSubmit = () => {
    if (!form.judul || !form.kategori || !form.kecamatan) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ background: "#f5f0e8", minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 40 }}>
        <div style={{ background: "var(--surface)", borderRadius: 16, padding: 48, textAlign: "center", maxWidth: 440, boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
          <div style={{ fontSize: 56, marginBottom: 16 }}>✅</div>
          <h2 style={{color: "var(--primary)", marginBottom: 12 }}>Laporan Terkirim!</h2>
          <p style={{ fontSize: 14, color: "#666", lineHeight: 1.7, marginBottom: 24 }}>Terima kasih! Laporan Anda telah diterima dan akan diverifikasi oleh admin dalam waktu 1×24 jam.</p>
          <button onClick={() => setSubmitted(false)} style={{ background: "var(--primary)", color: "var(--surface)", border: "none", borderRadius: 8, padding: "12px 28px", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
            Buat Laporan Baru
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div style={{ background: "var(--primary)", padding: "36px 40px 36px" }}>
        <h1 style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 700, color: "var(--surface)", margin: "0 0 8px" }}>
          Sampaikan Aspirasi & Keluhan Anda
        </h1>
        <p style={{ fontSize: 14, color: "#a8d0f0", margin: 0 }}>
          Bantu kami membangun Kota Malang yang lebih baik melalui laporan fasilitas publik Anda
        </p>
      </div>

      {/* Form */}
      <div style={{ background: "#f5f0e8", padding: "32px 40px" }}>
        <div style={{ background: "var(--surface)", borderRadius: 12, padding: "28px 32px", maxWidth: 640, margin: "0 auto", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
          <p style={{ fontSize: 12, color: "var(--primary)", fontWeight: 700, marginBottom: 20, margin: "0 0 20px" }}>Kelengkapan Data</p>

          <div style={{ marginBottom: 18 }}>
            <label style={{ fontSize: 13, fontWeight: 600, color: "#444", display: "block", marginBottom: 6 }}>Judul Laporan</label>
            <input
              value={form.judul}
              onChange={e => setForm({ ...form, judul: e.target.value })}
              placeholder="Contoh: Lampu Jalan Padam di Jl. Ijen"
              style={{ width: "100%", padding: "11px 14px", border: "1px solid #ddd", borderRadius: 8, fontSize: 13, boxSizing: "border-box", outline: "none" }}
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 18 }}>
            <div>
              <label style={{ fontSize: 13, fontWeight: 600, color: "#444", display: "block", marginBottom: 6 }}>Kategori Fasilitas</label>
              <select value={form.kategori} onChange={e => setForm({ ...form, kategori: e.target.value })} style={{ width: "100%", padding: "11px 14px", border: "1px solid #ddd", borderRadius: 8, fontSize: 13, background: "var(--surface)" }}>
                <option value="">Pilih Kategori</option>
                <option>Jalan</option>
                <option>Lampu Jalan</option>
                <option>Drainase / Selokan</option>
                <option>Taman Kota</option>
                <option>Fasilitas Umum</option>
                <option>Sampah / Kebersihan</option>
                <option>Lainnya</option>
              </select>
            </div>
            <div>
              <label style={{ fontSize: 13, fontWeight: 600, color: "#444", display: "block", marginBottom: 6 }}>Foto Pendukung</label>
              <label style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, width: "100%", padding: "10px 14px", border: "1.5px dashed #bbb", borderRadius: 8, fontSize: 13, color: "#888", cursor: "pointer", boxSizing: "border-box" }}>
                📷 Unggah Foto
                <input type="file" accept="image/*" style={{ display: "none" }} />
              </label>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 18 }}>
            <div>
              <label style={{ fontSize: 13, fontWeight: 600, color: "#444", display: "block", marginBottom: 6 }}>Kecamatan</label>
              <select value={form.kecamatan} onChange={e => setForm({ ...form, kecamatan: e.target.value, kelurahan: "" })} style={{ width: "100%", padding: "11px 14px", border: "1px solid #ddd", borderRadius: 8, fontSize: 13, background: "var(--surface)" }}>
                <option value="">Pilih Kecamatan</option>
                {Object.keys(kelurahanMap).map(k => <option key={k}>{k}</option>)}
              </select>
            </div>
            <div>
              <label style={{ fontSize: 13, fontWeight: 600, color: "#444", display: "block", marginBottom: 6 }}>Kelurahan</label>
              <select value={form.kelurahan} onChange={e => setForm({ ...form, kelurahan: e.target.value })} style={{ width: "100%", padding: "11px 14px", border: "1px solid #ddd", borderRadius: 8, fontSize: 13, background: "var(--surface)" }}>
                <option value="">Pilih Kelurahan</option>
                {(kelurahanMap[form.kecamatan] || []).map(k => <option key={k}>{k}</option>)}
              </select>
            </div>
          </div>

          <div style={{ marginBottom: 24 }}>
            <label style={{ fontSize: 13, fontWeight: 600, color: "#444", display: "block", marginBottom: 6 }}>Detail Laporan</label>
            <textarea
              value={form.detail}
              onChange={e => setForm({ ...form, detail: e.target.value })}
              placeholder="Berikan deskripsi lengkap mengenai kondisi di lapangan, patokan lokasi, atau dampak yang dirasakan..."
              rows={5}
              style={{ width: "100%", padding: "11px 14px", border: "1px solid #ddd", borderRadius: 8, fontSize: 13, boxSizing: "border-box", resize: "vertical", outline: "none", lineHeight: 1.6 }}
            />
          </div>

          <div style={{ borderTop: "1px solid #eee", paddingTop: 20, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <p style={{ fontSize: 12, color: "#888", margin: 0 }}>* Laporan Anda akan diverifikasi oleh admin dalam waktu 1×24 jam.</p>
            <button
              onClick={handleSubmit}
              style={{ background: "var(--primary)", color: "var(--surface)", border: "none", borderRadius: 8, padding: "12px 24px", fontSize: 14, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}
            >
              ▶ Kirim Laporan
            </button>
          </div>
        </div>
      </div>

      {/* Info cards */}
      <div style={{ background: "#f5f0e8", padding: "0 40px 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, maxWidth: 700, margin: "0 auto" }}>
          {[
            { icon: "🛡️", color: "#E3F2FD", title: "Privasi Terjamin", desc: "Identitas pelapor dilindungi sepenuhnya oleh sistem keamanan data pemerintah Kota Malang" },
            { icon: "⚡", color: "var(--surface)3E0", title: "Respon Cepat", desc: "Laporan diteruskan langsung ke dinas terkait secara otomatis" },
            { icon: "🔄", color: "#E8F5E9", title: "Pantau Progres", desc: "Anda akan menerima notifikasi berkala mengenai perkembangan penanganan laporan Anda" },
          ].map(c => (
            <div key={c.title} style={{ background: c.color, borderRadius: 12, padding: 20 }}>
              <div style={{ fontSize: 22, marginBottom: 10 }}>{c.icon}</div>
              <p style={{ fontSize: 13, fontWeight: 700, color: "var(--primary)", margin: "0 0 6px" }}>{c.title}</p>
              <p style={{ fontSize: 12, color: "#555", lineHeight: 1.6, margin: 0 }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================================
// APP
// ============================================================
export default function App() {
  const [page, setPage] = useState({ name: "home" });

  return (
    <div style={{ minHeight: "100vh", background: "var(--surface)" }}>
     
      <Navbar page={page} setPage={setPage} />
      {page.name === "home" && <HomePage setPage={setPage} />}
      {page.name === "daftar" && <DaftarPage setPage={setPage} />}
      {page.name === "detail" && <DetailPage projectId={page.id} setPage={setPage} />}
      {page.name === "berita" && <BeritaPage newsId={page.id} />}
      {page.name === "laporan" && <LaporanPage />}
      <Footer setPage={setPage} />
    </div>
  );
}