# **README – Technical Approach**

## **Architecture, Choices & Testing Strategy**

I used the latest version of Next.js to take advantage of its modern performance, security, and architectural improvements. Since Tailwind CSS was already configured, I could focus on the functional aspects of the test without adding extra styling setup, keeping the structure lightweight and easy to review. The API is simulated with a simple async function, and for testing I used Jest to cover both pure functions and components, following common and straightforward frontend testing practices.

### **Key points**

- Latest Next.js for modern architecture
- Tailwind already configured
- Local API simulation for simplicity
- Jest used for testing functions and components

## **Going Further**

If the project were to evolve, several improvements could be explored:

- **Design System**  
  Introduce reusable UI components, shared tokens (colors, spacing, typography), and documentation through Storybook to ensure consistency and scalability.

- **More Complete Testing**  
  Extend the current test suite with deeper integration tests, more realistic API mocks, and broader coverage of edge cases.
