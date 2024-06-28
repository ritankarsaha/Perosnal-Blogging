---
title: "OSI-Model"
description: 'An in-depth look of the OSI Model and the sever different layers of abstraction that are used for effecient data transmission'
published: true
date: '2024-06-28'
slug: 'OSI-Model'
tags: ['OSI Model', 'System Design', 'Internet']
---

# OSI Model

**Contributors:** Ritankar Saha (Author)

The **OSI Model** is a **logical and conceptual model** that defines the network communications used by systems open to interconnection and communication with other systems. The **Open System Interconnection (OSI)** also defines a logical network and describes the transfer of computer packets over various layers of protocols.

## Overview

The **OSI Model** can be seen as a universal language for computer networking. It consists of seven layers of protocol, each stacked upon the other. This model helps in defining computer terminology in a detailed and better way, aiding in discussions and documentation. It allows us to break down complex communications into their components for better evaluation and understanding.

Although the **OSI Model** is not directly used with common protocols like **TCP/IP**, it helps us determine various factors and ensures:

- Separation of complex functions into simpler components.
- Development of a security-first mindset.
- Encouragement for hardware manufacturers to create devices that can connect seamlessly over the network.
- Easier troubleshooting.
- Identification of threats across the entire tech stack.

## Layers of the OSI Model

The seven abstract layers of the OSI Model, from top to bottom, are as follows:

### 1. Application Layer
This **Application Layer** of protocol among the seven abstract layers of the OSI Model that interacts data with the users. Web applications or in general any software applications rely on these protocols to give the user a presentable method to initiate communication. But it should be made clear that software applications are not part of this protocol instead tehy work to smooth communication between the user and the applications. The application layer is responsible for the protocols and data manipulation that the software relies on to provide meaningful data to the user. This includes protocol like HTTP and SMTP.

### 2. Presentation Layer
Also known as the **Translation Layer**, the **Presentation Layer** is responsible for manipulating and extracting data as required for transmission over the network. Its uses include encryption/decryption, compression, and translation.

### 3. Session Layer
The **Session Layer** is responsible for the communication that takes place between the devices over the network. The time period or the window between which the communication is opened and closed is known as the seesion. The session layer ensures that the window stays open long enough to transmit all the data being transferred and then closes the session window promptly to ensure that no resources are being wasted. The session layer also synchronises the data between the checkpoints.

### 4. Transport Layer
The **Transport Layer** is responsible for end-to-end communication between devices. It takes data from the session layer, breaks it into chunks, and sends it over to the network layer. It also reassembles the chunks into data the session layer can consume.

### 5. Network Layer
The **Network layer** is responsible for facilitating the data transfer between the devices that are connected over the network. The network layer is responsible for breaking the data into smaller components called packets on the sender's device, sends them over the network and then reassembles the smaller packets into data once again they reach the receiver's device. The Network layer is also responsible for finding the best path for data transfer and to reach it's destination, this is also known as the routing. If the devices that are communicating are over the same network the network layer is completely necessary.

### 6. Data-Link Layer
The **Data-Link Layer** is similar to the network layer but operates at a lower level. It facilitates data transfer between two devices over the network, taking data from the network layer and breaking it into smaller pieces called data frames.

### 7. Physical Layer
The **Physical Layer** comprises the physical aspects of the data transmission process, including cables and switches. It converts data from the Network and Data-Link layers into a bitstream of 0s and 1s. The physical layers of both the sender and receiver devices must agree on a signal convention to distinguish the 1s and 0s.

---

Thank you for taking the time to read this article! If you have any inputs, please suggest them in the comments section or send an email with your feedback. I will incorporate your suggestions and add you to the contributor's list.
