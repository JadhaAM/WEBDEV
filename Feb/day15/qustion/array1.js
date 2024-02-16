function findMajorityElement(arr) {
    let candidate = null;
    let count = 0;

    for (const num of arr) {
        if (count === 0) {
            candidate = num;
            count = 1;
        } else if (num === candidate) {
            count += 1;
        } else {
            count -= 1;
        }
    }

    // Check if the candidate is the majority element
    count = 0;
    for (const num of arr) {
        if (num === candidate) {
            count += 1;
        }
    }

    if (count > arr.length / 2) {
        return candidate;
    } else {
        return null; // No majority element found
    }
}

// Example usage:
const arr = [3, 3, 4, 2, 4, 4, 2, 4, 4];
const result = findMajorityElement(arr);
if (result !== null) {
    console.log("Majority element:", result);
} else {
    console.log("No majority element found");
}
    