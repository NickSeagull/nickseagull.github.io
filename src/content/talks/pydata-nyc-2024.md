---
title: "PyData NYC 2024"
description: "Building Production-Ready AI Systems in 90 Minutes"
date: "2024-11-07"
tags:
  - Docs
  - Template
videoId: "C4u1SjGiT_8"
---

## Comprehensive Summary of the PyData NYC 2024 Workshop on Production-Ready AI Systems

The workshop at PyData NYC 2024 provided a hands-on exploration of building production-ready RAG (Retrieval-Augmented Generation) applications, with a strong emphasis on the practical challenges and failures that occur when transitioning from proof-of-concept to production systems.

### Core Workshop Philosophy

The central theme of the workshop was that **"it's not that the tutorial is difficult" but rather that "production readiness" is the real challenge**. It was emphasized that developers only truly learn how to deploy to production by "deploying it multiple times and failing."

### Key Architectural Components Covered

The workshop was structured around the typical RAG pipeline components, each representing a potential microservice in production:

1. **Document Loading** - Converting raw data (PDFs) into processable documents with metadata
2. **Text Splitting** - Breaking documents into appropriately sized chunks
3. **Embedding Generation** - Creating vector representations of text
4. **Vector Search** - Implementing semantic search capabilities
5. **LLM Integration** - Connecting to language models for response generation
6. **Evaluation Systems** - Testing and validating AI outputs

### Critical Production Values and Outcomes

#### 1. **System Modularity and Service Separation**

It was emphasized that each component should potentially be a separate microservice because "many things can go wrong" at each stage. This architectural decision enables:

- Isolated failure handling
- Independent scaling
- Easier debugging and maintenance
- Better resource allocation per component

#### 2. **The Importance of Data Curation**

When asked about client document curation, it was stressed that this was "infinitely important." The key insight shared: **"It's very easy to make the mistake of just shoving everything into the AI and let it work and then nothing works."** Preprocessing and data quality are fundamental to system success.

#### 3. **Cost Management Through Smart Architecture**

The workshop highlighted using guardrail LLMs - smaller, cheaper models that act as filters before expensive operations:

- Pre-screening queries to prevent unnecessary expensive LLM calls
- Checking if answers exist in context before generating responses
- Implementing security and content filtering layers
  This approach "will save you a lot of money" in production environments.

#### 4. **Testing and Evaluation as First-Class Citizens**

Evaluations were introduced as "the equivalent of unit testing" for LLM systems, using frameworks like DeepEval to:

- Measure metrics like relevancy, faithfulness, hallucination, and toxicity
- Create comprehensive test suites rather than relying on "gut checks"
- Prevent regression when making prompt modifications
- Share testing methodology with stakeholders for better alignment

#### 5. **Vector Database and Embedding Strategy**

Key production considerations highlighted included:

- **Multi-tenancy challenges**: Separate vector spaces for different users/companies
- **Language-specific models**: Different embedding models for different languages
- **Chunk size optimization**: Balancing between context preservation and search accuracy
- **Metadata management**: Proper tagging for filtering and retrieval

### Real-World Production Failures and Lessons

Several illuminating production failure scenarios were shared:

#### Environment Variable Misconfiguration Case

A particularly telling example involved a system that worked perfectly in testing but failed in production due to a malformed locale string. The server was selecting the wrong language-specific vector database instance, causing French embeddings to be searched with Spanish queries. The client's response: "Your AI sucks" - when it was actually an environment configuration issue.

**Key Lesson**: Even sophisticated AI systems can fail due to basic infrastructure issues. Proper environment validation and testing across all deployment stages is crucial.

#### The PowerPoint vs Python Reality

A colleague's joke was shared - "Five years ago: How do you do ML? Use Python. Nowadays: How do you do AI? Use PowerPoint" - highlighting the gap between marketing promises and engineering reality in production AI systems.

### Production-Ready Best Practices

#### Prompt Management

- **Prompts are now code**: They need versioning, testing, and deployment strategies
- **Less reliable than regular code**: Requires more extensive testing
- **Guard against prompt changes**: One improvement might break "100 other cases"

#### Security and Safety

Multiple layers of protection were recommended:

- Implement protection against prompt injection
- Use smaller LLMs as gatekeepers for sensitive operations
- Consider social engineering attacks in system design
- Have fallback strategies for when guardrails are bypassed

#### Stakeholder Communication

The importance was emphasized of:

- Sharing test methodology with stakeholders
- Working at a "language level" that's easier to communicate than technical diagrams
- Setting realistic expectations about AI capabilities and limitations

### Technology Stack Considerations

While the workshop used Python and LangChain for accessibility, it was noted that production systems often use different tools:

- Language-specific implementations (Rust, Elixir examples were mentioned)
- Custom frameworks tailored to specific requirements
- Focus on performance and reliability over ease of use

### Key Takeaways for Production AI Systems

1. **AI systems are still regular systems** - They fail in all the traditional ways plus new AI-specific ways
2. **Testing is non-negotiable** - Comprehensive evaluation suites prevent regression and ensure quality
3. **Architecture matters** - Proper service separation and modularity enable maintainable systems
4. **Cost optimization is crucial** - Smart use of cheaper models and caching can dramatically reduce expenses
5. **Data quality trumps model sophistication** - Curated, preprocessed data is infinitely important
6. **Production readiness requires experience** - Learning comes from "deploying multiple times and failing"

The workshop successfully bridged the gap between tutorial-level AI development and production-ready systems, providing attendees with practical insights into the challenges and solutions for deploying AI at scale in enterprise environments. The focus on "what can go wrong" rather than just "how to build it" provided unique value for practitioners moving beyond proof-of-concept implementations.
