# Use a lightweight image like Alpine if you're just serving static files
FROM nginx:alpine

# Set the working directory
WORKDIR /usr/share/nginx/html

# Copy the JSON files into the image
COPY db.json index.json ./

# Expose the port
EXPOSE 80

# Run nginx
CMD ["nginx", "-g", "daemon off;"]
