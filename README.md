# Patient Monitoring System

This repository contains the code and documentation for the Patient Monitoring System, a project designed to leverage the Internet of Things (IoT) to provide continuous real-time monitoring of vital health parameters. 

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Architecture](#architecture)
- [Hardware Components](#hardware-components)
- [Software Requirements](#software-requirements)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)


## Introduction

Healthcare is constantly evolving, and technological advancements are enabling significant improvements in patient care. The Patient Monitoring System aims to integrate IoT devices and data analytics to provide continuous, real-time monitoring of vital health metrics. This project empowers individuals and healthcare providers by facilitating access to accurate and timely health data.

## Features

- **Integration of Smart Sensors and IoT Devices**: Utilizes sensors like MAX30100 for pulse oximetry and DS18B20 for temperature monitoring.
- **Central Hub (ESP32 Microcontroller)**: Acts as the central hub for efficient communication between sensors and the web server.
- **Web Server Hosting**: Leverages technologies such as Node.js, Express.js, and Firebase for remote monitoring and data storage.
- **Medical Report Download**: Allows users and healthcare providers to download comprehensive medical reports.
- **Calibration of Health Parameter Readings**: Ensures accuracy and reliability of health data through calibration mechanisms.

## Architecture

![Architecture Diagram](path/to/architecture-diagram.png)

## Hardware Components

- ESP32 Microcontroller
- MAX30100 Pulse Oximeter Sensor
- DS18B20 Temperature Sensor
- Other relevant IoT devices and connectors

## Software Requirements

- Node.js
- Express.js
- Firebase
- Additional libraries and dependencies listed in `package.json`

## Setup and Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/patient-monitoring-system.git
   cd patient-monitoring-system
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Setup Firebase**

   - Create a Firebase project and obtain your configuration details.
   - Replace the placeholder configuration in the project with your Firebase configuration.

4. **Upload Code to ESP32**

   - Use the Arduino IDE or PlatformIO to upload the ESP32 code from the `esp32` directory.
   - Ensure the correct configuration of Wi-Fi credentials and Firebase details.

5. **Run the Server**

   ```bash
   npm start
   ```

## Usage

- Access the web interface through the provided URL.
- Monitor real-time health data.
- Download medical reports from the website.


