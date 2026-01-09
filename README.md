# **README – Technical Approach**

## **Architecture, Choices & Testing Strategy**

Since the choice of frameworks and libraries wasn’t imposed, I chose to work with the latest version of Next.js and React to take advantage of their modern performance, security, and architectural improvements.

Because Tailwind CSS was already configured, I could focus on the functional aspects of the test without adding extra styling setup, keeping the structure lightweight and easy to review.

The API is simulated with a simple async function instead of fetching a JSON file from the public folder, keeping the logic closer to a real backend integration.

I also implemented a small user‑switching feature to easily test different use cases. For this, I used Jotai to avoid prop drilling and to ensure the state management can adapt smoothly once real, non‑mocked data becomes available.

For testing, I used Jest to cover both pure functions and components, following common and straightforward frontend testing practices.

### **Key points**

- Latest Next.js for modern architecture
- Tailwind already configured
- Local API simulation using an async function
- User switcher implemented with Jotai
- Jest used for testing functions and components

---

## **Going Further**

If the project were to evolve, several improvements could be explored:

- **Design System**  
  Introduce reusable UI components, shared tokens (colors, spacing, typography), and documentation through Storybook to ensure consistency and scalability.

- **More Complete Testing**  
  Extend the current test suite with deeper integration tests, more realistic API mocks, and broader coverage of edge cases.

- **User Switcher Improvement**  
  Make it available only in development mode and improve the UI (e.g., using a popover).

- **Mocking System**  
  Since frontend development often starts before the real API is finalized, I could set up a proper mocking system like MSW to simulate backend behavior more accurately.
