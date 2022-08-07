// The big realization about Jest: it's HARD to change the mock implementation of a module B imported from module A AFTER A has
// already been imported into the test file. It's straightforward enough to mock B immediately for the whole test file. But in
// cases where B is not mocked at first, but then requires mocking for one particular test case, things can get ugly fast. The
// reason is that A is using the unmocked version of B that it imported when it was initialized at the beginning of the test file.
// In order to get A to use a different B implementation, it needs to import B again. And in order to do that, A itself needs to
// be re-initialized. Since we are now using a new instance of A and B, a lot of other test entities that were created in the
// beginning need to be re-instantiated again, because their old versions are still interacting with the stale versions of A and
// B. Another option is to just pass in a "spied on" function as B to A at the beginning, then later on the spy's implementation
// can be swapped out so that any calls to B from A will use the new function implementation. The problem is that this also
// depends on how A uses B. If B is a function that returns some sort of DATA, and if changing the implementation of B means
// somehow changing that DATA, then this approach won't work. That's because A imports B's data once, and uses it, and that's it.
// There's no need for it to import B again unless it is itself initialized again. So even if we change B's implementation, A will
// continue to happily use the stale B.
