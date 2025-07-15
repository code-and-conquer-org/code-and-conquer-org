# Stage 1: Build Tailwind CSS
FROM node:18-alpine as tailwind-build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY tailwind.config.js ./
COPY css ./css
COPY page ./page
COPY index.html ./
RUN mkdir -p ./assets/css
RUN npx tailwindcss -i ./css/input.css -o ./assets/css/tailwind.css --minify

# Stage 2: Jekyll site
FROM jekyll/jekyll:4.2.0
RUN apk update && apk add nodejs npm python3 make g++
WORKDIR /srv/jekyll
COPY . .
# Copy the generated tailwind.css from the build stage
COPY --from=tailwind-build /app/assets/css/tailwind.css ./assets/css/tailwind.css
RUN bundle install
EXPOSE 4000
CMD ["jekyll", "serve", "--host", "0.0.0.0"]