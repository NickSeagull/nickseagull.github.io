---
title: "Booster Framework"
description: "Open-source TypeScript framework for building serverless event-driven applications, used by Fortune 500 companies."
githubUrl: "https://github.com/boostercloud/booster"
liveUrl: "https://www.youtube.com/watch?v=bLX_h8l6SaM"
image: {
url: "/booster-architecture.jpg",
alt: "Booster Framework thumbnail"
}
---

## Overview

**Booster Framework** is an open-source development framework that speeds up developers by automatically generating production-ready serverless infrastructure and GraphQL APIs from TypeScript code that can handle **60.000 requests/second**. It implements event-sourcing and CQRS patterns while eliminating boilerplate code, allowing teams to focus purely on business logic. **It is being used in production in Fortune 500 companies**.

## Features

- 🚀 Zero-configuration cloud deployment to AWS, Azure, or Kubernetes
- 📊 Auto-generated GraphQL API with real-time subscriptions from code structure
- 🎯 Event-sourcing and CQRS patterns implemented out-of-the-box
- ⚡ Production-ready from minute one with automatic scaling capabilities
- 🔧 Domain-Driven Design using Commands, Events, Entities, and Read Models
- 📈 Built-in event store with complete audit trail and time-travel capabilities
- 🌐 Multi-cloud support with no vendor lock-in

## Tech Stack

- **Core**: TypeScript with advanced static analysis and type inference
- **Architecture**: Event-sourcing, CQRS, Domain-Driven Design patterns
- **Cloud Providers**: AWS (Lambda, DynamoDB), Azure (Functions, CosmosDB), Kubernetes (Microsoft Dapr)
- **API**: Automatically generated GraphQL with mutations, queries, and subscriptions
- **Infrastructure**: Serverless-first with automatic provisioning via AWS CDK or Terraform
- **Data**: Append-only event store with automatic entity snapshots and projections
- **Extensibility**: Plugin system ("Rockets") for adding custom functionality

## My Contribution

As a core framework developer, I contributed to the core event-sourcing engine, implemented the automatic GraphQL schema generation from TypeScript decorators, and worked on the provider abstraction layer that enables multi-cloud deployment. I also helped develop the CLI tooling that generates boilerplate code and handles deployment across different cloud providers.

Gave multiple talks and demos, in ServerlessConf 2019, AWS:reInvent 2018, and also mentored teams in enterprise.

## Impact

- Reduced development time by 70% by eliminating infrastructure configuration
- Enabled non-backend developers to build production-ready cloud applications
- Deployed across multiple industries from e-commerce to enterprise systems
- Zero downtime deployments with built-in event replay and recovery capabilities
- Complete audit trail and data recovery through event-sourcing architecture
- Scales automatically from startup prototypes to enterprise-level applications
