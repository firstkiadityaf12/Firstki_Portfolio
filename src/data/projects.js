export const projects = [
    {
        id: 1,
        title: "Automated Subdomain Scanner",
        description: "Alat bantu reconnaissance yang mengintegrasikan beberapa tools OSINT untuk memetakan attack surface secara otomatis dan mendeteksi kerentanan 'subdomain takeover'.",
        image: "/images/2.png",
        category: "Red Teaming Tools",
        technologies: ["Python", "Bash", "Go", "Docker"],
        metrics: '{"targets_scanned": 500, "vulnerabilities_found": 12}',
        demoUrl: "https://writeup.yourportfolio.com/recon-tool",
        githubUrl: "github.com/user/recon-scanner"
    },
    {
        id: 2,
        title: "E-Commerce SQLi Exploitation Writeup",
        description: "Laporan mendalam mengenai penemuan kerentanan SQL Injection pada platform e-commerce open-source, lengkap dengan langkah remediasi dan bukti konsep (PoC).",
        image: "/images/3.png",
        category: "Vulnerability Research",
        technologies: ["SQLMap", "Burp Suite", "MySQL", "PHP"],
        metrics: '{"severity": "Critical", "cvss_score": 9.1}',
        demoUrl: "https://blog.yourportfolio.com/sqli-research",
        githubUrl: "github.com/user/poc-payloads"
    },
    {
        id: 3,
        title: "Active Directory Lab Setup",
        description: "Simulasi lingkungan perusahaan yang rentan untuk melatih teknik lateral movement, kerberos attacks (AS-REP Roasting), dan privilege escalation.",
        image: "/images/1.png",
        category: "Security Labs",
        technologies: ["Windows Server", "Active Directory", "PowerShell", "BloodHound"],
        metrics: '{"machines_pwned": 5, "techniques_used": 8}',
        demoUrl: "https://docs.yourportfolio.com/ad-lab-guide",
        githubUrl: "github.com/user/ad-homelab-configs"
    }
];

export const categories = [
    "All",
    "Red Teaming Tools",
    "Vulnerability Research",
    "Security Labs"
];