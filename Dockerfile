# On utilise l'image officielle de Bun
FROM oven/bun:latest

# On définit le dossier de travail dans le container
WORKDIR /app

# On copie uniquement les fichiers de dépendances d'abord (optimisation du cache)
COPY package.json bun.lock* ./

# On installe les dépendances à l'intérieur du container
RUN bun install

# On copie le reste des fichiers du projet
COPY . .

# On expose le port par défaut de Vite
EXPOSE 5173

# Commande pour lancer le serveur de dev avec accès externe
CMD ["bun", "run", "dev", "--host"]