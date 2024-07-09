---
title: "DNS Zones, DNS Caching & Reverse DNS"
description: 'An in-depth look and understanding the concepts of DNS Zones, Caching and Reverse DNS'
published: true
date: '2024-07-10'
slug: 'DNS-Caching'
tags: ['DNS', 'System Design', 'Internet','All']
---

# DNS Zones, Caching, and Reverse DNS


## DNS Zones
A DNS Zone is a distinct part of the domain namespace which is delegated to a legal entity like a person, an authority, or an organization who is responsible for maintaining the DNS Zone. A DNS Zone is also an administrative function allowing for granular control of DNS Components such as Authoritative name servers.

## DNS Caching
A DNS Cache (also known as the DNS Resolver Cache) is a temporary database maintained by the user's operating system that keeps a record track of a list of visited websites and attempted to visit websites and other internet domains by the user. In other words, a DNS Cache is just a memory of recent DNS lookups that our computer can easily refer to when it's trying to figure out how to load a website. 

The DNS (Domain Name Server) specifies a TTL (Time to Live) on every DNS record. TTL specifies the number of seconds the record can be cached by a DNS Client or Server. When the record is stored in a cache, whatever TTL value came with it gets stored as well. The server continues to update the TTL of every record stored in the cache counting every second. When it hits zero, the record is deleted or purged from the case. At this point, if a query from the DNS is received it has to start the resolution process all over once again.

## Reverse DNS
A reverse DNS lookup is a DNS query for the domain name associated with the given IP Address. This accomplishes the opposite of the more commonly used DNS Lookup, in which the DNS system is queried to receive an IP Address. The process of reverse resolving an IP Address uses PTR records. If the server doesn't have a PTR Record, it cannot resolve a reverse DNS lookup.

Reverse lookups are commonly used by email servers. Email servers check and see if an email message came from a valid server before bringing it onto their network. Many email servers will reject messages from any server that does not support reverse lookups or from a server that is highly unlikely to be legitimate.

## Examples of Managed DNS Solutions
- Route53
- Cloudflare DNS
- Google Cloud DNS
- Azure DNS
- NS1