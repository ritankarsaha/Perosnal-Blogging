---
title: "Domain-Name-System"
description: 'An in-depth guide to understanding the Domain Name System (DNS), including its workings, server types, query types, and record types.'
published: true
date: '2024-07-07'
slug: 'Domain-Name-System'
tags: ['DNS', 'System Design', 'Internet','All']
---

# Understanding Domain Name System (DNS)

**Note:** If you haven't already read our previous blog about IP Addresses, please check it out. It provides a foundational understanding of how machines communicate over the internet.

## Introduction to DNS

IP Addresses are protocols enabling machines to communicate over the internet. However, it's cumbersome for humans to remember IP Addresses (e.g., `122.250.192.232`). Instead, we use domain names like `google.com`. This is where the **Domain Name System (DNS)** comes in—a hierarchical and decentralized naming system that translates human-readable domain names into IP Addresses.

## How DNS Works

The DNS lookup involves the following 8 steps:

<img width="766" alt="Screenshot 2024-07-07 at 2 41 43 AM" src="https://github.com/ritankarsaha/Perosnal-Blogging/assets/136831315/4c867aa8-e8e8-45eb-ada9-2982ea378683">


1. The client types `example.com` into the web-browser. The query travels through the internet and is received by a DNS resolver.
2. The DNS Resolver recursively queries a DNS root server.
3. The DNS root server responds to the DNS resolver with the address of a Top-Level Domain (TLD) server.
4. The DNS Resolver makes the request to the `.com` TLD server.
5. The TLD server responds with the IP Address of the domain’s name-server, `example.com`.
6. The recursive resolver sends a query to the domain’s name-server.
7. The IP Address for `example.com` is returned to the resolver from the name-server.
8. Finally, the DNS resolver provides the web-browser with the IP Address, allowing the client to request content from the resolved IP Address, such as a webpage.

## DNS Server Types

The DNS infrastructure comprises four main types of servers:

1. **DNS Resolver**: 
   - Also known as the **DNS Recursive Server**.
   - A DNS Resolver (also known as the DNS Recursive Server) is the first stop in a DNS Query.
   - The recursive resolver acts as a middle-man between the client and the DNS root server or the name-server.
   - After receiving a DNS query from a web client, it will either respond with cached data or it will send up the request to the DNS root-server/name-server, followed by another request to the TLD main-server and finally one last request to the authoritative name-server.
   - After receiving a response from the authoritative name-server containing the desired IP Address, the resolver then sends the requested content back to the client.

2. **DNS Root Server**:
   - Accepts the recursive resolver’s query and directs it to a TLD name-server based on the domain extension (e.g., `.com`, `.net`).
   - Overseen by ICANN (Internet Corporation for Assigned Names and Numbers).
   - There are 13 DNS root name-servers, but multiple copies exist worldwide for speedy responses through AnyCast routing.

3. **TLD Name-Server**:
   - Maintains information for domain names sharing a common extension.
   - Managed by IANA (Internet Assigned Numbers Authority), a branch of ICANN.
   - Divided into Generic TLDs (e.g., `.com`, `.net`) and Country Code TLDs (e.g., `.us`, `.uk`).

4. **Authoritative DNS Server**:
   - The last step for a resolver in the IP Address lookup.
   - Contains information specific to a domain (e.g., `google.com`).
   - It provides the recursive resolver with the IP Address of the server which is found in the DNS A record, or if the domain has a CNAME record it will provide the resolver with an alias domain, at which point the recursive resolver will have to perform a whole new DNS-lookup to procure a record from an authoritative nameserver(often an A record containing the IP Address).
   - If it cannot find the specific domain, it returns the NXDOMAIN message.


## DNS Query Types

DNS lookups can involve different types of queries:

1. **Recursive Query**:
   - In a recursive query a DNS client requires a DNS server or a typically DNS resolver to respond with a resource record or an error message if it cannot find the resource record for the requested domain.

2. **Iterative Query**:
   - In an iterative query, a DNS client provides a hostname and the DNS resolver returns the best answer it can.
   - If the DNS resolver has the relevant DNS data in it’s cache it returns that else it refers the DNS client to the root server or another authoritative nameserver which is nearest to the requested DNS zone.
   - The DNS client must then repeat the query directly against the DNS server it was referred to.

3. **Non-Recursive Query**:
   - A non-recursive query is one in which the DNS Resolver already knows the answer. It either returns a DNS record because it already stores it in the local cache, or queries a DNS name-server which is authoritative for the record, meaning it definitely hold sthe correct IP Address for the host-name.
   - In both the cases, there is no need for additional round of queries like that in the recursive and the iterative query. It can return the correct answer to the client with immediate effect.



## DNS Record Types

DNS Records(aka zone files) are instructions that live in authoritative DNS servers and provide information about that domain including what IP Address is associated for that domain and how to handle requests for that domain at the same time. These records consist of a series of text files written in what is more commonly known as the DNS syntax. DNS Syntax is just a string of characters that is used as DNS Commands and tells the DNS what to do. All DNS Records have a “TTL” which means time-to-leave, and indicated how often a DNS server should refresh after record.

Some of the more commonly known records are as follows:-

- **A (Address record)**: Holds the IP address of a domain.
- **AAAA (IPv6 Address record)**: Contains the IPv6 address for a domain.
- **CNAME (Canonical Name record)**: Forwards one domain or subdomain to another domain.
- **MX (Mail Exchanger record)**: Directs mail to an email server.
- **TXT (Text record)**: Lets an admin store text notes, often used for email security.
- **NS (Name Server records)**: Stores the name server for a DNS entry.
- **SOA (Start of Authority)**: Stores admin information about a domain.
- **SRV (Service Location record)**: Specifies a port for specific services.
- **PTR (Reverse-lookup Pointer record)**: Provides a domain name in reverse lookups.
- **CERT (Certificate record)**: Stores public key certificates.

## Sub-Domains

A sub-domain is an additional part of a main domain name, used to logically separate sections of a website. We can create multiple sub-domains on the main domain.
For example, in `support.example.com`:
- `support` is a sub-domain of the main domain `example.com`.
- `example.com` is the main domain.
- `.com` is the Top-Level Domain (TLD).

---

By understanding how DNS works, the types of servers involved, and the various query and record types, you can appreciate the complexity and efficiency of this crucial internet infrastructure.
