function assertEqual(actual, expected, message) {
    return actual === expected
        ? "PASS: " + message
        : "FAIL: " + message + " (Expected: " + expected + ", Got: " + actual + ")";
}

function runTests() {
    const results = [];

    results.push(assertEqual(formatCurrency(10), "$10.00", "formatCurrency"));
    results.push(assertEqual(parseIntegerSafe("42"), 42, "parseIntegerSafe valid"));
    results.push(assertEqual(parseIntegerSafe("abc"), null, "parseIntegerSafe invalid"));
    results.push(assertEqual(capitalizeWords("hello world"), "Hello World", "capitalizeWords"));
    results.push(assertEqual(reverseString("abc"), "cba", "reverseString"));
    results.push(assertEqual(isValidEmail("test@test.com"), true, "isValidEmail valid"));
    results.push(assertEqual(isValidEmail("bademail"), false, "isValidEmail invalid"));
    results.push(assertEqual(removeDuplicates([1,1,2]).length, 2, "removeDuplicates"));
    results.push(assertEqual(truncateString("Hello World", 5), "Hello...", "truncateString"));

    document.getElementById("testOutput").textContent = results.join("\n");
}

function demoFormatCurrency() {
    const val = document.getElementById("currencyInput").value;
    document.getElementById("currencyResult").textContent = formatCurrency(val);
}

function demoParseInteger() {
    const val = document.getElementById("intInput").value;
    document.getElementById("intResult").textContent = parseIntegerSafe(val);
}

function demoCapitalize() {
    const val = document.getElementById("capInput").value;
    document.getElementById("capResult").textContent = capitalizeWords(val);
}

function demoReverse() {
    const val = document.getElementById("reverseInput").value;
    document.getElementById("reverseResult").textContent = reverseString(val);
}

function demoEmail() {
    const val = document.getElementById("emailInput").value;
    document.getElementById("emailResult").textContent = isValidEmail(val);
}

function demoRemoveDuplicates() {
    const val = document.getElementById("arrayInput").value.split(",");
    document.getElementById("arrayResult").textContent = removeDuplicates(val);
}

function demoTruncate() {
    const text = document.getElementById("truncateInput").value;
    const length = parseInt(document.getElementById("truncateLength").value);
    document.getElementById("truncateResult").textContent = truncateString(text, length);
}

const debounced = debounce((val) => {
    document.getElementById("debounceResult").textContent = "Stopped typing: " + val;
}, 1000);

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("debounceInput")
        .addEventListener("input", function(e) {
            debounced(e.target.value);
        });
});
