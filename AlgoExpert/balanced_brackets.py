def balanced_brackets(str):
    open_brackets = "([{"
    close_brackets = ")]}"
    mappings = {")": "(", "]": "[", "}": "{"}
    stack = []

    if len(str) == 0:
        return "Please enter a non-empty string."

    for bracket in str:
        if bracket in open_brackets:
            stack.append(bracket)
        elif bracket in close_brackets:
            if len(stack) > 0 and mappings.get(bracket, None) == stack[-1]:
                stack.pop()
            else:
                return False


    return len(stack) == 0

print(balanced_brackets("()[]{}"))
print(balanced_brackets("(]{(})"))
print(balanced_brackets("])[]{}"))
print(balanced_brackets(""))
print(balanced_brackets("([{}])"))


