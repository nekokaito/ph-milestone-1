function monthlySavings(arr , livingCost) {
    let finalCost = 0;
    if (Array.isArray(arr) && !isNaN(livingCost)) {
    for (let i = 0; i < arr.length; i++) {
    let sum = arr[i];
    if (sum >= 3000) {
    arr[i] = sum * 0.8;
    }
    finalCost += arr[i];
    }
    let saving = finalCost - livingCost;
    if (saving > 0) {
    return saving;
    }
    else {
    return 'earn more';
    }
    }
    else {
    return 'invalid input';
    }
    }

    const m = monthlySavings ([1000 , 2000 , 3000 ] , 5400);

    console.log(m);