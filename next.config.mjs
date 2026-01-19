/** @type {import('next').NextConfig} */
const nextConfig = {
  // Se usarmos imagens locais, nem precisamos de configuração complexa aqui.
  // Mas vou deixar preparado caso use domínios externos no futuro:
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'i.gifer.com',
      },
      {
        protocol: 'https',
        hostname: 'media.giphy.com',
      },
    ],
  },
};

export default nextConfig; // <--- AQUI ESTAVA O ERRO (Agora está correto)