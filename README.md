# Mokse Website

A modern React + Vite + Tailwind CSS website for the Mokse project.

This repository contains the front-end source code. It uses **Vite** as the build tool, **React 19** for the UI, and **Tailwind CSS 4** for styling.

---

## Prerequisites

Before running this project, make sure **Node.js** and **npm** are installed on your system.

### Windows

1. Download the **LTS version** of Node.js from the [official website](https://nodejs.org/).
2. Run the installer (`.msi`) and follow the prompts — keep the default options.
3. After installation, verify Node.js and npm:

   ```bash
   node -v
   npm -v
   ```

### macOS

1. Install via Homebrew (recommended):

  ```bash
  brew install node
  ```

Or download and install from nodejs.org.

2. Verify installation:

  ```bash
  node -v
  npm -v
  ```

### Linux (Ubuntu/Debian)

Run the following commands:

  ```bash
  sudo apt update
  sudo apt install -y nodejs npm
  ```

For the latest version of Node.js, you can install nvm (Node Version Manager):

  ```bash
  curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
  source ~/.bashrc
  nvm install --lts
  ```

Verify installation:

  ```bash
  node -v
  npm -v
  ```

## Project Setup

Once Node.js and npm are installed:

1. Clone this repository

  ```bash
  git clone https://github.com/codingUnited/MokseWebsite.git
  cd mokse-website
  ```

2. Install dependencies

  ```bash
  npm install
  ```

This will install all required dependencies defined in the package.json file.

## Development Server

Start the local development server:

  ```bash
  npm run dev
  ```

Then open the provided URL (usually <http://localhost:5173>) in your browser.

The site will automatically reload as you make changes.

## Build for Production

To generate an optimized production build:

  ```bash
  npm run build
  ```

This outputs the compiled static files into the dist/ directory.

To preview the production build locally:

  ```bash
  npm run preview
  ```

### Linting

Run ESLint to check for code quality issues:

  ```bash
  npm run lint
  ```

## DB Setup

### Download MongoDB local sever

<https://github.com/codingUnited/MokseWebsite.git>

Mkae sure you select the correct platform Windows/Ubuntu/Mac

- For Windows and Mac no extra steps needed downlaod will include MongoDB Compass

#### Linux

  1. Download Compass

  ```bash
  wget https://downloads.mongodb.com/compass/mongodb-compass_1.43.3_amd64.deb
  ```

  2. Install the package

  ```bash
  sudo dpkg -i mongodb-compass_1.43.3_amd64.deb
  ```

  3. Fix any missing dependencies

  ```bash
  sudo apt-get install -f
  ```

  4. Launch Compass

  ```bash
  mongodb-compass
  ```

### Tech Stack

- Vite — Fast modern build tool

- React 19

- Tailwind CSS 4

- ESLint — Linting and code quality

- MongoDB
