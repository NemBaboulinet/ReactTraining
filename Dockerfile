# On utilise l'image officielle de Bun
FROM oven/bun:latest

# On définit le dossier de travail dans le container
WORKDIR /app

#On change la propriété du dossier avant de copier quoi que ce soit pour éviter les problèmes de permissions (l'image officielle de Bun utilise un utilisateur non-root nommé "bun")
RUN chown -R bun:bun /app

# On change l'utilisateur pour éviter les problèmes de permissions lors de l'installation des dépendances et de l'exécution du projet
USER bun

# On copie uniquement les fichiers de dépendances d'abord (optimisation du cache) en gardant "bun" comme propriétaire
COPY chowm bun:bun package.json bun.lock* ./

# On installe les dépendances à l'intérieur du container
RUN bun install

# On copie le reste des fichiers du projet
COPY --chown=bun:bun . .

# On expose le port par défaut de Vite
EXPOSE 5173

# Commande pour lancer le serveur de dev avec accès externe
CMD ["bun", "run", "dev", "--host"]