---
title: "Type-Driven AI Code Assistant"
description: "VSCode extension that combined Haskell's type system with GPT-3 to create intelligent, type-aware code completions before the era of GitHub Copilot."
image: {
url: "/type-driven-assistant.png",
alt: "Type-Driven AI Code Assistant thumbnail"
}
---

## Overview

**Type-Driven AI Code Assistant** was an experimental VSCode extension that pioneered the integration of formal type systems with large language models for intelligent code generation. By extracting type signatures from Haskell type holes and combining Hoogle search with GPT-3's natural language understanding, the project demonstrated how AI could leverage strong typing to generate provably correct code completions—years before GitHub Copilot made AI-assisted programming mainstream.

## Features

- 🎯 **Type-Guided Generation**: Extracted type signatures from Haskell type holes to constrain AI suggestions
- 🔍 **Hoogle Integration**: Automated searching of Haskell's extensive function database based on type signatures
- 🤖 **GPT-3 Selection Logic**: Used LLM to intelligently select the most contextually appropriate function from Hoogle results
- ✅ **Correctness by Construction**: Generated code guaranteed to type-check due to type-driven constraints
- 🔄 **Bidirectional Inference**: Worked both from types to implementation and from partial code to type completion
- 💡 **Context-Aware Suggestions**: Combined local code context with type information for more relevant completions

## Tech Stack

- **IDE Integration**: VSCode Extension API with Language Server Protocol
- **Type System**: Haskell's type inference engine and GHC's type hole mechanism
- **Search Infrastructure**: Hoogle API for type-signature-based function search
- **AI Model**: GPT-3 API for natural language understanding and selection
- **Language**: TypeScript for extension logic, Haskell for type extraction
- **Architecture**: Client-server model with caching for performance optimization

## My Contribution

Independently conceived and developed this experimental system that bridged the gap between formal methods and machine learning. Created the type extraction pipeline, designed the integration between Hoogle and GPT-3, and implemented the VSCode extension.

## Impact

- **Industry Foresight**: Demonstrated the viability of AI-assisted programming 2+ years before GitHub Copilot's announcement
- **Type-Safety Innovation**: Proved that LLMs could be constrained by type systems to generate correct-by-construction code
- **Research Contribution**: Explored the intersection of formal methods and machine learning in practical development tools
- **Paradigm Validation**: Validated the concept that AI could understand and work within formal type constraints
- **Technical Feasibility**: Showed that complex tool chains (IDE + Type System + Search + LLM) could be integrated effectively
- **Developer Workflow**: Pioneered the UX patterns for non-intrusive AI assistance in code editors

## Historical Significance

This project represents an important milestone in the evolution of AI-assisted development. Created during the early days of GPT-3, when most applications focused on pure text generation, this extension demonstrated that LLMs could be enhanced with formal verification tools to produce not just plausible but provably correct code.

The key innovation was recognizing that type signatures could serve as a bridge between human intent, formal correctness, and AI capabilities. By using Haskell's type holes—places where the compiler knows what type is needed but the implementation is missing—the system could guarantee that any AI-suggested code would compile and run correctly.

While the project remained experimental and wasn't released, it proved several concepts that are now fundamental to modern AI coding assistants: the importance of context awareness, the value of combining multiple information sources, and the potential for AI to work within formal constraints rather than against them.
