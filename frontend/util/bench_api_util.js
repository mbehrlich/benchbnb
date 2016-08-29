export const fetchBenches = (filters, success) => {
  $.ajax({
    url: "/api/benches",
    method: "GET",
    data: filters,
    success,
    error: (error) => (console.log(error))
  });
};

export const createBench = (bench, success) => {
  $.ajax({
    url: "/api/benches",
    method: "POST",
    data: {bench},
    success,
    error: (error) => (console.log(error))
  });
};
