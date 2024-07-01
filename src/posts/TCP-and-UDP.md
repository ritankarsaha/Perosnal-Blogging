---
title: "TCP and UDP"
description: 'An in-depth look at the protocols like TCP and UDP and understanding how they work'
published: true
date: '2024-06-29'
slug: 'TCP-and-UDP'
tags: ['TCP', 'UDP', 'System Design', 'Internet','All']
---
<br>



# TCP and UDP: Understanding the Core Internet Protocols
<br>



## TCP: Transmission Control Protocol
<br>



**Transmission Control Protocol (TCP)**- Transmission Control Protocol or TCP is essentially connection oriented. This means that when a connection is set up, or established, data can be flown in both the directions between the receiver and the sender. TCP has built in system for checking for errors and to guarantee that data will be delivered in the same order it is being sent by the sender. This makes it the best protocol to transmit or send information like data files, static images and web pages over the internet. However, even though TCP is quite reliable it’s feedback mechanism leads to large overhead thereby consuming greater bandwidth over the internet.

### Key Features of TCP
<br>


- **Connection-Oriented:** Requires a properly established connection.
- **Guaranteed Delivery:** Ensures the delivery of data over the network.
- **Re-Transmission:** Allows re-transmission of lost data.
- **Speed:** Slower compared to UDP.
- **Broadcasting:** Does not support broadcasting.
- **Common Use Cases:** HTTPS, HTTP, SMTP, POP, FTP, etc.

## UDP: User Datagram Protocol

**User Datagram Protocol (UDP)**-User Datagram Protocol or UDP is a simpler connectionless protocol without any error-checking or recovery services that are required. With UDP there is no overhead for establishing a connection, maintaining a connection or terminating a connection. Data is continuosly sent over the protocol whether the user receives it or not. It is largely preferred for real-time communication like broadcast or multi-cast network communication. We should use UDP over TCP when we need the lowest latency and late data is worse than the loss of data.

### Key Features of UDP
<br>



- **Connectionless:** Does not require a properly established connection.
- **No Guaranteed Delivery:** Cannot ensure the delivery of data over the network.
- **No Re-Transmission:** Does not allow re-transmission of lost data.
- **Speed:** Faster compared to TCP.
- **Broadcasting:** Supports broadcasting and multicast network communication.
- **Common Use Cases:** Video streaming, DNS, VoIP, etc.

## Comparison Table

| Feature               | TCP                                        | UDP                                       |
|-----------------------|--------------------------------------------|-------------------------------------------|
| **Connection Type**   | Connection-oriented                        | Connectionless                            |
| **Reliability**       | High (guarantees delivery and order)       | Low (no guarantees)                       |
| **Speed**             | Slower due to overhead                     | Faster due to no connection setup         |
| **Error Checking**    | Yes                                        | No                                        |
| **Re-Transmission**   | Yes                                        | No                                        |
| **Broadcast Support** | No                                         | Yes                                       |
| **Typical Uses**      | HTTPS, HTTP, SMTP, POP, FTP                | Video streaming, DNS, VoIP                |

## Conclusion

Understanding the differences between TCP and UDP is essential for selecting the appropriate protocol based on your specific needs. TCP provides reliability and data integrity, making it suitable for applications like web browsing and email. In contrast, UDP offers speed and efficiency, ideal for real-time applications like video streaming and online gaming, where latency is more critical than reliability.