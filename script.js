// data for algorithms
const sortingAlgorithmsInfo = {
    bubblesort: { 
        description: [
            "Bubble Sort is an iterative sorting algorithm that imitates the movement of bubbles in sparkling water. The bubbles represents the elements of the data structure.",
            "The bigger bubbles reach the top faster than smaller bubbles, and this algorithm works in the same way. It iterates through the data structure and for each cycle compares the current element with the next one, swapping them if they are in the wrong order.",
            "It's a simple algorithm to implement, but not much efficient: on average, quadratic sorting algorithms with the same time complexity such as Selection Sort or Insertion Sort perform better.<br> It has several variants to improve its performances, such as Shaker Sort, Odd Even Sort and Comb Sort.",
        ],
        averagecomplexity: "O(n<sup>2</sup>)",
        bestcase: "O(n)",
        worstcase: "O(n<sup>2</sup>)",
        spacecomplexity: "O(1)",
        code: {
            c: "void bubble_sort(long arr[], long n) {\n" + "  long c, d, t;\n" + "\n" + "  for (c = 0 ; c < n - 1; c++) {\n" + "    for (d = 0 ; d < n - c - 1; d++) {\n" + "      if (arr[d] > arr[d+1]) {\n" + "        t = arr[d];\n" + "        arr[d] = arr[d+1];\n" + "        arr[d+1] = t;\n" + "      }\n" + "    }\n" + "  }\n" + "}",
            cpp: "void bubbleSort(int arr[], int n) {\n" + "    int i, j;\n" + "    for (i = 0; i < n-1; i++)\n" + "        for (j = 0; j < n-i-1; j++)\n" + "            if (arr[j] > arr[j+1])\n" + "                swap(arr[j], arr[j+1]);\n" + "}",
            java: "static void bubbleSort(int[] arr) {\n" + "    int n = arr.length;\n" + "    int temp = 0;\n" + "    for(int i=0; i < n; i++){\n" + "        for(int j=1; j < (n-i); j++){\n" + "            if(arr[j-1] > arr[j]){\n" + "                temp = arr[j-1];\n" + "                arr[j-1] = arr[j];\n" + "                arr[j] = temp;\n" + "            }\n" + "        }\n" + "    }\n" + "}",
            javascript: "function bubbleSort(arr) {\n" + "    for(let i = 0; i < arr.length; i++) {\n" + "        for(let j = 0; j < ( arr.length - i -1 ); j++) {\n" + "            if(arr[j] > arr[j+1]) {\n" + "              let temp = arr[j]\n" + "              arr[j] = arr[j + 1]\n" + "              arr[j+1] = temp\n" + "            }\n" + "        }\n" + "    }\n" + "}",
            python: "def bubbleSort(arr):\n" + "    n = len(arr)\n" + "    for i in range(n-1):\n" + "        for j in range(0, n-i-1):\n" + "            if arr[j] > arr[j+1]:\n" + "                arr[j], arr[j+1] = arr[j+1], arr[j]",
        },
    },
    selectionsort: {
        description: [
            "Selection Sort is an iterative and in-place sorting algorithm that divides the data structure in two sublists: the ordered one, and the unordered one. The algorithm loops for all the elements of the data structure and for every cycle picks the smallest element of the unordered sublist and adds it to the sorted sublist, progressively filling it.",
            "It's a really simple and intuitive algorithm that does not require additional memory, but it's not really efficient on big data structures due to its quadratic time complexity.",
            "This algorithm has been upgraded and enhanced in several variants such as Heap Sort.",
        ],
        averagecomplexity: "O(n<sup>2</sup>)",
        bestcase: "O(n<sup>2</sup>)",
        worstcase: "O(n<sup>2</sup>)",
        spacecomplexity: "O(1)",
        code: {
            c: "void swap(int *xp, int *yp)\n" + "{\n" + "    int temp = *xp;\n" + "    *xp = *yp;\n" + "    *yp = temp;\n" + "}\n" + "\n" + "void selectionSort(int arr[], int n)\n" + "{\n" + "    int i, j, min_idx;\n" + "\n" + "    for (i = 0; i < n-1; i++)\n" + "    {\n" + "        min_idx = i;\n" + "        for (j = i+1; j < n; j++)\n" + "          if (arr[j] < arr[min_idx])\n" + "            min_idx = j;\n" + "\n" + "        swap(&arr[min_idx], &arr[i]);\n" + "    }\n" + "}",
            cpp: "void swap(int *xp, int *yp) {\n" + "    int temp = *xp;\n" + "    *xp = *yp;\n" + "    *yp = temp;\n" + "}\n" + "\n" + "void selectionSort(int arr[], int n) {\n" + "    int i, j, min_idx;\n" + "\n" + "    for (i = 0; i < n-1; i++) {\n" + "        min_idx = i;\n" + "        for (j = i+1; j < n; j++)\n" + "            if (arr[j] < arr[min_idx])\n" + "                min_idx = j;\n" + "\n" + "        swap(&arr[min_idx], &arr[i]);\n" + "    }\n" + "}",
            java: "void selectionSort(int arr[])\n" + "{\n" + "    int n = arr.length;\n" + "\n" + "    for (int i = 0; i < n-1; i++)\n" + "    {\n" + "        int min_idx = i;\n" + "        for (int j = i+1; j < n; j++)\n" + "            if (arr[j] < arr[min_idx])\n" + "                min_idx = j;\n" + "\n" + "        int temp = arr[min_idx];\n" + "        arr[min_idx] = arr[i];\n" + "        arr[i] = temp;\n" + "    }\n" + "}",
            javascript: "function selectionSort(arr) {\n" + "    for (let i = 0; i < arr.length; i++) {\n" + "        let min = i;\n" + "        for (let j = i + 1; j < arr.length; j++) {\n" + "            if (arr[min] > arr[j]) {\n" + "                min = j;\n" + "            }\n" + "        }\n" + "        if (i != min) {\n" + "            [arr[ i ],arr[min]]= [arr[min],arr[ i ]];\n" + "        }\n" + "    }\n" + "    return arr\n" + "}",
            python: "def selection_sort(A):\n" + "    for i in range(len(A)):\n" + "        min_idx = i\n" + "        for j in range(i+1, len(A)):\n" + "            if A[min_idx] > A[j]:\n" + "                min_idx = j\n" + "        A[i], A[min_idx] = A[min_idx], A[i]",
        },
    },
    insertionsort: {
        description: [
            "Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time. It's less performant than advanced sorting algorithms, but it can still have some advantages: it's really easy to implement and it's efficient on small data structures almost sorted.",
            "The algorithm divides the data structure in two sublists: a sorted one, and one still to sort. Initially, the sorted sublist is made up of just one element and it gets progressively filled. For every iteration, the algorithm picks an element on the unsorted sublist and inserts it at the right place in the sorted sublist. It's available in several variants such as Gnome Sort.",
        ],
        averagecomplexity: "O(n<sup>2</sup>)",
        bestcase: "O(n)",
        worstcase: "O(n<sup>2</sup>)",
        spacecomplexity: "O(1)",
        code: {
            c: "void insertionSort(int arr[], int n)\n" + "{\n" + "    int i, key, j;\n" + "    for (i = 1; i < n; i++) {\n" + "        key = arr[i];\n" + "        j = i - 1;\n" + "\n" + "        while (j >= 0 && arr[j] > key) {\n" + "            arr[j + 1] = arr[j];\n" + "            j = j - 1;\n" + "        }\n" + "        arr[j + 1] = key;\n" + "    }\n" + "}",
            cpp: "void insertionSort(int arr[], int n)\n" + "{\n" + "    int i, key, j;\n" + "    for (i = 1; i < n; i++)\n" + "    {\n" + "        key = arr[i];\n" + "        j = i - 1;\n" + "\n" + "        while (j >= 0 && arr[j] > key)\n" + "        {\n" + "            arr[j + 1] = arr[j];\n" + "            j = j - 1;\n" + "        }\n" + "        arr[j + 1] = key;\n" + "    }\n" + "}",
            java: "void insertionSort(int arr[])\n" + "{\n" + "       int n = arr.length;\n" + "       for (int i = 1; i < n; ++i) {\n" + "           int key = arr[i];\n" + "           int j = i - 1;\n" + "\n" + "           while (j >= 0 && arr[j] > key) {\n" + "               arr[j + 1] = arr[j];\n" + "               j = j - 1;\n" + "           }\n" + "           arr[j + 1] = key;\n" + "       }\n" + "}",
            javascript: "function insertionSort(arr, n)\n" + "{\n" + "    let i, key, j;\n" + "    for (i = 1; i < n; i++)\n" + "    {\n" + "        key = arr[i];\n" + "        j = i - 1;\n" + "\n" + "        while (j >= 0 && arr[j] > key)\n" + "        {\n" + "            arr[j + 1] = arr[j];\n" + "            j = j - 1;\n" + "        }\n" + "        arr[j + 1] = key;\n" + "    }\n" + "}",
            python: "def insertionSort(arr):\n" + "    for i in range(1, len(arr)):\n" + "        key = arr[i]\n" + "        j = i-1\n" + "        while j >= 0 and key < arr[j] :\n" + "                arr[j + 1] = arr[j]\n" + "                j -= 1\n" + "        arr[j + 1] = key",
        },
    },
    quicksort: {
        description: [
            "Quick Sort is a sorting algorithm based on splitting the data structure in smaller partitions and sort them recursively until the data structure is sorted.",
            "This division in partitions is done based on an element, called pivot: all the elements bigger than the pivot get placed on the right side of the structure, the smaller ones to the left, creating two partitions. Next, this procedure gets applied recursively to the two partitions and so on.",
            "This partition technique based on the pivot is called Divide and conquer. It's a performant strategy also used by other sorting algorithms, such as Merge Sort.",
        ],
        averagecomplexity: "O(n × log n)",
        bestcase: "O(n × log n)",
        worstcase: "O(n<sup>2</sup>)",
        spacecomplexity: "O(n)",
        code: {
            c:
                "void swap(int *a, int *b) {\n" +
                "  int t = *a;\n" +
                "  *a = *b;\n" +
                "  *b = t;\n" +
                "}\n" +
                "\n" +
                "int partition(int array[], int low, int high) {\n" +
                "\n" +
                "  int pivot = array[high];\n" +
                "  int i = (low - 1);\n" +
                "\n" +
                "  for (int j = low; j < high; j++) {\n" +
                "    if (array[j] <= pivot) {\n" +
                "      i++;\n" +
                "      swap(&array[i], &array[j]);\n" +
                "    }\n" +
                "  }\n" +
                "\n" +
                "  swap(&array[i + 1], &array[high]);\n" +
                "  return (i + 1);\n" +
                "}\n" +
                "\n" +
                "void quickSort(int array[], int low, int high) {\n" +
                "  if (low < high) {\n" +
                "\n" +
                "    int pi = partition(array, low, high);\n" +
                "\n" +
                "    quickSort(array, low, pi - 1);\n" +
                "\n" +
                "    quickSort(array, pi + 1, high);\n" +
                "  }\n" +
                "}",
            cpp:
                "void swap(int* a, int* b)\n" +
                "{\n" +
                "    int t = *a;\n" +
                "    *a = *b;\n" +
                "    *b = t;\n" +
                "}\n" +
                "\n" +
                "int partition (int arr[], int low, int high)\n" +
                "{\n" +
                "    int pivot = arr[high];\n" +
                "    int i = (low - 1);\n" +
                "\n" +
                "    for (int j = low; j <= high- 1; j++)\n" +
                "    {\n" +
                "        if (arr[j] <= pivot)\n" +
                "        {\n" +
                "            i++;\n" +
                "            swap(&arr[i], &arr[j]);\n" +
                "        }\n" +
                "    }\n" +
                "    swap(&arr[i + 1], &arr[high]);\n" +
                "    return (i + 1);\n" +
                "}\n" +
                "\n" +
                "void quickSort(int arr[], int low, int high)\n" +
                "{\n" +
                "    if (low < high)\n" +
                "    {\n" +
                "        int pivot = partition(arr, low, high);\n" +
                "\n" +
                "        quickSort(arr, low, pivot - 1);\n" +
                "        quickSort(arr, pivot + 1, high);\n" +
                "    }\n" +
                "}",
            java:
                "public void quickSort(int arr[], int begin, int end) {\n" +
                "    if (begin < end) {\n" +
                "        int partitionIndex = partition(arr, begin, end);\n" +
                "\n" +
                "        quickSort(arr, begin, partitionIndex-1);\n" +
                "        quickSort(arr, partitionIndex+1, end);\n" +
                "    }\n" +
                "}\n" +
                "\n" +
                "private int partition(int arr[], int begin, int end) {\n" +
                "    int pivot = arr[end];\n" +
                "    int i = (begin-1);\n" +
                "\n" +
                "    for (int j = begin; j < end; j++) {\n" +
                "        if (arr[j] <= pivot) {\n" +
                "            i++;\n" +
                "\n" +
                "            int swapTemp = arr[i];\n" +
                "            arr[i] = arr[j];\n" +
                "            arr[j] = swapTemp;\n" +
                "        }\n" +
                "    }\n" +
                "\n" +
                "    int swapTemp = arr[i+1];\n" +
                "    arr[i+1] = arr[end];\n" +
                "    arr[end] = swapTemp;\n" +
                "\n" +
                "    return i+1;\n" +
                "}",
            javascript:
                "function quickSort(array, start, end) {\n" +
                "  if (start === undefined) {\n" +
                "    start = 0;\n" +
                "    end = array.length - 1;\n" +
                "  } else if (start >= end) {\n" +
                "    return array;\n" +
                "  }\n" +
                "  let rStart = start, rEnd = end;\n" +
                "  let pivot = array[Math.floor(Math.random() * (end - start + 1) + start)];\n" +
                "  while (start < end) {\n" +
                "    while (array[start] <= pivot) start++;\n" +
                "    while (array[end] > pivot) end--;\n" +
                "    if (start < end) {\n" +
                "      let temp = array[start];\n" +
                "      array[start] = array[end];\n" +
                "      array[end] = temp;\n" +
                "    }\n" +
                "  }\n" +
                "  quickSort(array, rStart, start - 1);\n" +
                "  quickSort(array, start, rEnd);\n" +
                "}",
            python:
                "def partition(array, start, end):\n" +
                "    pivot = array[start]\n" +
                "    low = start + 1\n" +
                "    high = end\n" +
                "\n" +
                "    while True:\n" +
                "        while low <= high and array[high] >= pivot:\n" +
                "            high = high - 1\n" +
                "\n" +
                "        while low <= high and array[low] <= pivot:\n" +
                "            low = low + 1\n" +
                "\n" +
                "        if low <= high:\n" +
                "            array[low], array[high] = array[high], array[low]\n" +
                "        else:\n" +
                "            break\n" +
                "\n" +
                "    array[start], array[high] = array[high], array[start]\n" +
                "\n" +
                "    return high\n" +
                "\n" +
                "def quick_sort(array, start, end):\n" +
                "    if start >= end:\n" +
                "        return\n" +
                "\n" +
                "    p = partition(array, start, end)\n" +
                "    quick_sort(array, start, p-1)\n" +
                "    quick_sort(array, p+1, end)",
        },
    },
    mergesort: {
        description: [
            "Merge Sort is a sorting algorithm based on the Divide et Impera technique, like Quick Sort. It can be implemented iteratively or recursively, using the Top-Down and Bottom-Up algorithms respectively. We represented the first one.",
            "The algorithm divides the data structure recursively until the subsequences contain only one element. At this point, the subsequences get merged and ordered sequentially. To do so, the algorithm progressively builds the sorted sublist by adding each time the minimum element of the next two unsorted subsequences until there is only one sublist remaining. This will be the sorted data structure.",
        ],
        averagecomplexity: "O(n × log n)",
        bestcase: "O(n × log n)",
        worstcase: "O(n × log n)",
        spacecomplexity: "O(n)",
        code: {
            c:
                "void merge(int arr[], int l, int m, int r)\n" +
                "{\n" +
                "    int i, j, k;\n" +
                "    int n1 = m - l + 1;\n" +
                "    int n2 = r - m;\n" +
                "\n" +
                "    int L[n1], R[n2];\n" +
                "\n" +
                "    for (i = 0; i < n1; i++)\n" +
                "        L[i] = arr[l + i];\n" +
                "    for (j = 0; j < n2; j++)\n" +
                "        R[j] = arr[m + 1 + j];\n" +
                "\n" +
                "    i = 0;\n" +
                "    j = 0;\n" +
                "    k = l;\n" +
                "\n" +
                "    while (i < n1 && j < n2) {\n" +
                "        if (L[i] <= R[j]) {\n" +
                "            arr[k] = L[i];\n" +
                "            i++;\n" +
                "        }\n" +
                "        else {\n" +
                "            arr[k] = R[j];\n" +
                "            j++;\n" +
                "        }\n" +
                "        k++;\n" +
                "    }\n" +
                "\n" +
                "    while (i < n1) {\n" +
                "        arr[k] = L[i];\n" +
                "        i++;\n" +
                "        k++;\n" +
                "    }\n" +
                "\n" +
                "    while (j < n2) {\n" +
                "        arr[k] = R[j];\n" +
                "        j++;\n" +
                "        k++;\n" +
                "    }\n" +
                "}\n" +
                "\n" +
                "void mergeSort(int arr[], int l, int r)\n" +
                "{\n" +
                "    if (l < r) {\n" +
                "        int m = l + (r - l) / 2;\n" +
                "\n" +
                "        mergeSort(arr, l, m);\n" +
                "        mergeSort(arr, m + 1, r);\n" +
                "        merge(arr, l, m, r);\n" +
                "    }\n" +
                "}",
            cpp:
                "void merge(int *array, int l, int m, int r) {\n" +
                "   int i, j, k, nl, nr;\n" +
                "   nl = m-l+1; nr = r-m;\n" +
                "   int larr[nl], rarr[nr];\n" +
                "\n" +
                "   for(i = 0; i < nl; i++)\n" +
                "      larr[i] = array[l+i];\n" +
                "\n" +
                "   for(j = 0; j < nr; j++)\n" +
                "      rarr[j] = array[m+1+j];\n" +
                "\n" +
                "   i = 0; j = 0; k = l;\n" +
                "\n" +
                "   while(i < nl && j < nr) {\n" +
                "      if(larr[i] <= rarr[j]) {\n" +
                "         array[k] = larr[i];\n" +
                "         i++;\n" +
                "      } else {\n" +
                "         array[k] = rarr[j];\n" +
                "         j++;\n" +
                "      }\n" +
                "      k++;\n" +
                "   }\n" +
                "   while(i < nl) {\n" +
                "      array[k] = larr[i];\n" +
                "      i++; k++;\n" +
                "   }\n" +
                "   while(j < nr) {\n" +
                "      array[k] = rarr[j];\n" +
                "      j++; k++;\n" +
                "   }\n" +
                "}\n" +
                "\n" +
                "void mergeSort(int *array, int l, int r) {\n" +
                "   int m;\n" +
                "   if(l < r) {\n" +
                "      int m = l+(r-l)/2;\n" +
                "\n" +
                "      mergeSort(array, l, m);\n" +
                "      mergeSort(array, m+1, r);\n" +
                "      merge(array, l, m, r);\n" +
                "   }\n" +
                "}",
            java:
                "void merge(int arr[], int l, int m, int r)\n" +
                "{\n" +
                "    int n1 = m - l + 1;\n" +
                "    int n2 = r - m;\n" +
                "\n" +
                "    int L[] = new int[n1];\n" +
                "    int R[] = new int[n2];\n" +
                "\n" +
                "    for (int i = 0; i < n1; ++i)\n" +
                "        L[i] = arr[l + i];\n" +
                "    for (int j = 0; j < n2; ++j)\n" +
                "        R[j] = arr[m + 1 + j];\n" +
                "\n" +
                "    int i = 0, j = 0;\n" +
                "\n" +
                "    int k = l;\n" +
                "    while (i < n1 && j < n2) {\n" +
                "        if (L[i] <= R[j]) {\n" +
                "            arr[k] = L[i];\n" +
                "            i++;\n" +
                "        }\n" +
                "        else {\n" +
                "            arr[k] = R[j];\n" +
                "            j++;\n" +
                "        }\n" +
                "        k++;\n" +
                "    }\n" +
                "\n" +
                "    while (i < n1) {\n" +
                "        arr[k] = L[i];\n" +
                "        i++;\n" +
                "        k++;\n" +
                "    }\n" +
                "\n" +
                "    while (j < n2) {\n" +
                "        arr[k] = R[j];\n" +
                "        j++;\n" +
                "        k++;\n" +
                "    }\n" +
                "}\n" +
                "\n" +
                "void sort(int arr[], int l, int r)\n" +
                "{\n" +
                "    if (l < r) {\n" +
                "        int m =l+ (r-l)/2;\n" +
                "\n" +
                "        sort(arr, l, m);\n" +
                "        sort(arr, m + 1, r);\n" +
                "\n" +
                "        merge(arr, l, m, r);\n" +
                "    }\n" +
                "}",
            javascript:
                "function mergeSort(array) {\n" +
                "  const half = array.length / 2\n" +
                "\n" +
                "  if (array.length < 2){\n" +
                "    return array\n" +
                "  }\n" +
                "\n" +
                "  const left = array.splice(0, half)\n" +
                "  return merge(mergeSort(left),mergeSort(array))\n" +
                "}\n" +
                "\n" +
                "function merge(left, right) {\n" +
                "    let arr = []\n" +
                "\n" +
                "    while (left.length && right.length) {\n" +
                "        if (left[0] < right[0]) {\n" +
                "            arr.push(left.shift())\n" +
                "        } else {\n" +
                "            arr.push(right.shift())\n" +
                "        }\n" +
                "    }\n" +
                "\n" +
                "    return [ ...arr, ...left, ...right ]\n" +
                "}",
            python:
                "def mergeSort(arr):\n" +
                "    if len(arr) > 1:\n" +
                "        mid = len(arr)//2\n" +
                "        L = arr[:mid]\n" +
                "        R = arr[mid:]\n" +
                "\n" +
                "        mergeSort(L)\n" +
                "        mergeSort(R)\n" +
                "\n" +
                "        i = j = k = 0\n" +
                "\n" +
                "        while i < len(L) and j < len(R):\n" +
                "            if L[i] < R[j]:\n" +
                "                arr[k] = L[i]\n" +
                "                i += 1\n" +
                "            else:\n" +
                "                arr[k] = R[j]\n" +
                "                j += 1\n" +
                "            k += 1\n" +
                "\n" +
                "        while i < len(L):\n" +
                "            arr[k] = L[i]\n" +
                "            i += 1\n" +
                "            k += 1\n" +
                "\n" +
                "        while j < len(R):\n" +
                "            arr[k] = R[j]\n" +
                "            j += 1\n" +
                "            k += 1",
        },
    },
    heapsort: {
        description: [
            "Heap Sort is an in-place iterative sorting algorithm based on auxiliary data structures called heap. It's less efficient than algorithm with the same time complexity and it's not suitable for data structures with few elements.",
            "The heap is a data structure representable as a binary tree, where each node has a value bigger or equal to its children. Consequently, the root will hold the maximum value.",
            "The data structure gets ordered to form the heap initially, and then it gets progressively reordered with an algorithm similar to Selection Sort, starting from the bigger elements.",
        ],
        averagecomplexity: "O(n × log n)",
        bestcase: "O(n × log n)",
        worstcase: "O(n × log n)",
        spacecomplexity: "O(1)",
        code: {
            c:
                "void swap(int *a, int *b) {\n" +
                "    int temp = *a;\n" +
                "    *a = *b;\n" +
                "    *b = temp;\n" +
                "}\n" +
                "\n" +
                "void heapify(int arr[], int n, int i) {\n" +
                "    int largest = i;\n" +
                "    int left = 2 * i + 1;\n" +
                "    int right = 2 * i + 2;\n" +
                "\n" +
                "    if (left < n && arr[left] > arr[largest])\n" +
                "      largest = left;\n" +
                "\n" +
                "    if (right < n && arr[right] > arr[largest])\n" +
                "      largest = right;\n" +
                "\n" +
                "    if (largest != i) {\n" +
                "      swap(&arr[i], &arr[largest]);\n" +
                "      heapify(arr, n, largest);\n" +
                "    }\n" +
                "}\n" +
                "\n" +
                "void heapSort(int arr[], int n) {\n" +
                "    for (int i = n / 2 - 1; i >= 0; i--)\n" +
                "        heapify(arr, n, i);\n" +
                "\n" +
                "    for (int i = n - 1; i >= 0; i--) {\n" +
                "        swap(&arr[0], &arr[i]);\n" +
                "        heapify(arr, i, 0);\n" +
                "    }\n" +
                "}",
            cpp:
                "void heapify(int arr[], int n, int i) {\n" +
                "    int largest = i;\n" +
                "    int left = 2 * i + 1;\n" +
                "    int right = 2 * i + 2;\n" +
                "\n" +
                "    if (left < n && arr[left] > arr[largest])\n" +
                "      largest = left;\n" +
                "\n" +
                "    if (right < n && arr[right] > arr[largest])\n" +
                "      largest = right;\n" +
                "\n" +
                "    if (largest != i) {\n" +
                "      swap(arr[i], arr[largest]);\n" +
                "      heapify(arr, n, largest);\n" +
                "    }\n" +
                "}\n" +
                "\n" +
                "void heapSort(int arr[], int n) {\n" +
                "    for (int i = n / 2 - 1; i >= 0; i--)\n" +
                "      heapify(arr, n, i);\n" +
                "\n" +
                "    for (int i = n - 1; i >= 0; i--) {\n" +
                "      swap(arr[0], arr[i]);\n" +
                "      heapify(arr, i, 0);\n" +
                "    }\n" +
                "}",
            java:
                "public void sort(int arr[]) {\n" +
                "      int n = arr.length;\n" +
                "\n" +
                "      for (int i = n / 2 - 1; i >= 0; i--) {\n" +
                "        heapify(arr, n, i);\n" +
                "      }\n" +
                "\n" +
                "      for (int i = n - 1; i >= 0; i--) {\n" +
                "        int temp = arr[0];\n" +
                "        arr[0] = arr[i];\n" +
                "        arr[i] = temp;\n" +
                "\n" +
                "        heapify(arr, i, 0);\n" +
                "      }\n" +
                "}\n" +
                "\n" +
                "void heapify(int arr[], int n, int i) {\n" +
                "    int largest = i;\n" +
                "    int l = 2 * i + 1;\n" +
                "    int r = 2 * i + 2;\n" +
                "\n" +
                "    if (l < n && arr[l] > arr[largest])\n" +
                "        largest = l;\n" +
                "\n" +
                "    if (r < n && arr[r] > arr[largest])\n" +
                "        largest = r;\n" +
                "\n" +
                "    if (largest != i) {\n" +
                "        int swap = arr[i];\n" +
                "        arr[i] = arr[largest];\n" +
                "        arr[largest] = swap;\n" +
                "\n" +
                "        heapify(arr, n, largest);\n" +
                "    }\n" +
                "}",
            javascript:
                "function heapSort(array) {\n" +
                "  let size = array.length\n" +
                "\n" +
                "  for (let i = Math.floor(size / 2 - 1); i >= 0; i--)\n" +
                "    heapify(array, size, i)\n" +
                "\n" +
                "  for (let i = size - 1; i >= 0; i--) {\n" +
                "    let temp = array[0]\n" +
                "    array[0] = array[i]\n" +
                "    array[i] = temp\n" +
                "    heapify(array, i, 0)\n" +
                "  }\n" +
                "}\n" +
                "\n" +
                "function heapify(array, size, i) {\n" +
                "  let max = i\n" +
                "  let left = 2 * i + 1\n" +
                "  let right = 2 * i + 2\n" +
                "\n" +
                "  if (left < size && array[left] > array[max])\n" +
                "    max = left\n" +
                "\n" +
                "  if (right < size && array[right] > array[max])\n" +
                "    max = right\n" +
                "\n" +
                "  if (max != i) {\n" +
                "    let temp = array[i]\n" +
                "    array[i] = array[max]\n" +
                "    array[max] = temp\n" +
                "\n" +
                "    heapify(array, size, max)\n" +
                "  }\n" +
                "}",
            python:
                "def heapify(arr, n, i):\n" +
                "  largest = i\n" +
                "  l = 2 * i + 1\n" +
                "  r = 2 * i + 2\n" +
                "\n" +
                "  if l < n and arr[i] < arr[l]:\n" +
                "      largest = l\n" +
                "\n" +
                "  if r < n and arr[largest] < arr[r]:\n" +
                "      largest = r\n" +
                "\n" +
                "  if largest != i:\n" +
                "      arr[i], arr[largest] = arr[largest], arr[i]\n" +
                "      heapify(arr, n, largest)\n" +
                "\n" +
                "\n" +
                "def heapSort(arr):\n" +
                "  n = len(arr)\n" +
                "\n" +
                "  for i in range(n//2, -1, -1):\n" +
                "      heapify(arr, n, i)\n" +
                "\n" +
                "  for i in range(n-1, 0, -1):\n" +
                "      arr[i], arr[0] = arr[0], arr[i]\n" +
                "\n" +
                "      heapify(arr, i, 0)",
        },
    },
};

// array for storing elements
let arr = [];
let t = 400;
let currAlgo = "bubblesort";

/* DOM Variables */
let sortingAlgoHeading = document.querySelector(".sort-algorithm-heading h1");
let userInput = document.querySelector(".user-input input");
let arrayElements = document.querySelector(".array-elements");
let descriptionText = document.querySelector(".description-text");
let complexity = document.querySelectorAll(".table-box table tbody > tr");
let codeButtons = document.querySelectorAll(".menu-btns > button");
let codeContent = document.querySelector(".code-content pre");

// Function to be executed on load
initialise("bubble");
showCode("c");

codeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.classList.add("menu-btn-activated");

        codeButtons.forEach((otherbtn) => {
            if (otherbtn != btn) {
                otherbtn.classList.remove("menu-btn-activated");
            }
        });
    });
});

// Initialise function
function initialise(sortingAlgorithm) {
    let sortAlgo = sortingAlgorithmsInfo.bubblesort;
    userInput.value = "10";
    if (sortingAlgorithm == "bubble") {
        currAlgo = "bubblesort";
        sortingAlgoHeading.innerText = "Bubble Sort";
        sortAlgo = sortingAlgorithmsInfo.bubblesort;
    } else if (sortingAlgorithm == "selection") {
        currAlgo = "selectionsort";
        sortingAlgoHeading.innerText = "Selection Sort";
        sortAlgo = sortingAlgorithmsInfo.selectionsort;
    } else if (sortingAlgorithm == "insertion") {
        currAlgo = "insertionsort";
        sortingAlgoHeading.innerText = "Insertion Sort";
        sortAlgo = sortingAlgorithmsInfo.insertionsort;
    } else if (sortingAlgorithm == "quick") {
        currAlgo = "quicksort";
        sortingAlgoHeading.innerText = "Quick Sort";
        sortAlgo = sortingAlgorithmsInfo.quicksort;
    } else if (sortingAlgorithm == "merge") {
        currAlgo = "mergesort";
        sortingAlgoHeading.innerText = "Merge Sort";
        sortAlgo = sortingAlgorithmsInfo.mergesort;
    } else if (sortingAlgorithm == "heap") {
        currAlgo = "heapsort";
        sortingAlgoHeading.innerText = "Heap Sort";
        sortAlgo = sortingAlgorithmsInfo.heapsort;
    } else {
        console.log("No Sorting Algorithm Selected!");
    }
    initialiseHelper(sortAlgo);
    generateArray();
    displayElements();
    showCode("c");
}
function initialiseHelper(sortAlgo) {
    descriptionText.innerHTML = "";
    sortAlgo.description.forEach((desc) => {
        let text = document.createElement("p");
        text.innerHTML = desc;
        descriptionText.appendChild(text);
    });
    complexity.forEach((cdata) => {
        if (cdata.children[0].innerText == "Average Complexity") {
            cdata.children[1].innerHTML = sortAlgo.averagecomplexity;
        } else if (cdata.children[0].innerText == "Best Case") {
            cdata.children[1].innerHTML = sortAlgo.bestcase;
        } else if (cdata.children[0].innerText == "Worst Case") {
            cdata.children[1].innerHTML = sortAlgo.worstcase;
        } else {
            cdata.children[1].innerHTML = sortAlgo.spacecomplexity;
        }
    });
}

function showCode(language) {
    algoName = currAlgo;
    codeContent.innerHTML = `<pre>${sortingAlgorithmsInfo[algoName].code[language]}</pre>`;
}

// Function to generate array of random numbers and show on the screen
function generateArray() {
    arr = [];
    let n = userInput.value == "" ? 10 : userInput.value;
    t = Math.floor(250 - 3.5 * n);
    userInput.value = userInput.value > 100 ? 100 : userInput.value;
    for (let i = 0; i < n; i++) {
        let randomInt = Math.random() + 0.01;
        arr.push(randomInt);
    }

    displayElements();
}

function displayElements(move) {
    arrayElements.innerHTML = "";
    let arrayElementWidth = parseInt(getComputedStyle(arrayElements).width) / arr.length + "%";
    for (let i = 0; i < arr.length; i++) {
        let elem = document.createElement("div");
        elem.style.height = arr[i] * 100 + "%";
        elem.style.width = arrayElementWidth;
        elem.classList.add("elem");

        if (move && move.indices.includes(i)) {
            elem.style.background = "linear-gradient(0deg, rgba(22, 22, 22, 1) 5%, rgba(255,0,0,1) 100%)";
        }

        arrayElements.appendChild(elem);
    }
}

// giving sounds to visualizer
let audioCtx = null;

function playNote(freq) {
    if (audioCtx == null) {
        audioCtx = new (AudioContext || webkitAudioContext || window.webkitAudioContext)();
    }
    const dur = 0.1;
    const osc = audioCtx.createOscillator();
    osc.frequency.value = freq;
    osc.start();
    osc.stop(audioCtx.currentTime + dur);
    const node = audioCtx.createGain();
    node.gain.value = 0.1;
    node.gain.linearRampToValueAtTime(0, audioCtx.currentTime + dur);
    osc.connect(node);
    node.connect(audioCtx.destination);
}

// sort and display function
function sortPlay(array) {
    if (currAlgo == "bubblesort") {
        return bubbleSort(array);
    } else if (currAlgo == "selectionsort") {
        return selectionSort(array);
    } else if (currAlgo == "insertionsort") {
        return insertionSort(array);
    } else if (currAlgo == "quicksort") {
        return quickSortMoves(array, 0, array.length - 1);
    } else if (currAlgo == "mergesort") {
        return mergeSortMoves(array);
    } else if (currAlgo == "heapsort") {
        return heapSortMoves(array);
    }
}

function play() {
    const copy = [...arr];
    const moves = sortPlay(copy);
    animate(moves, "red");
}
function animate(moves) {
    if (moves.length == 0) {
        displayElements();
        return;
    }
    const move = moves.shift();
    const [i, j] = move.indices;
    if (move.type == "swap") {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    playNote(200 + arr[i] * 500);
    playNote(200 + arr[j] * 500);

    displayElements(move);
    setTimeout(function () {
        animate(moves);
    }, t);
}

function menuToggle() {
    document.querySelector("aside").classList.toggle("active");
}

// code-btns dynamic

/* Sorting Algorithms */
// Bubble Sort Algorithm
const bubbleSort = (array) => {
    const moves = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                moves.push({ indices: [j, j + 1], type: "swap" });
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return moves;
};
// Selection Sort Algorithm
const selectionSort = (array) => {
    const moves = [];
    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[min] > array[j]) {
                min = j;
            }
        }
        if (i != min) {
            moves.push({ indices: [min, i], type: "swap" });
            [array[i], array[min]] = [array[min], array[i]];
        }
    }
    return moves;
};
// Insertion Sort Algorithm
const insertionSort = (array) => {
    const moves = [];
    let i, key, j;
    for (i = 1; i < array.length; i++) {
        key = array[i];
        j = i - 1;

        while (j >= 0 && array[j] > key) {
            moves.push({ indices: [j, j + 1], type: "swap" });
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = key;
    }
    return moves;
};
// Quick Sort Algorithm
const quickSortMoves = (array, low, high) => {
    const moves = [];
    quickSort(array, low, high, moves);
    return moves;
};
function partition(arr, low, high, moves) {
    let pivot = arr[high];
    let i = low - 1;

    for (let j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            moves.push({ indices: [i, j], type: "swap" });
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    moves.push({ indices: [i + 1, high], type: "swap" });
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}
const quickSort = (array, low, high, moves) => {
    if (low >= high) return;
    let pi = partition(array, low, high, moves);

    quickSort(array, low, pi - 1, moves);
    quickSort(array, pi + 1, high, moves);
};
