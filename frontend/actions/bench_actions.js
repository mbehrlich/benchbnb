export const BENCH_CONSTANTS = {
  REQUEST_BENCHES: "REQUEST_BENCHES",
  RECEIVE_BENCHES: "RECEIVE_BENCHES",
  CREATE_BENCH: "CREATE_BENCH",
  RECEIVE_BENCH: "RECEIVE_BENCH"
}

export const requestBenches = () => ({
  type: BENCH_CONSTANTS.REQUEST_BENCHES
});

export const receiveBenches = (benches) => ({
  type: BENCH_CONSTANTS.RECEIVE_BENCHES,
  benches
});

export const createBench = (bench) => ({
  type: BENCH_CONSTANTS.CREATE_BENCH,
  bench
});

export const receiveBench = (bench) => ({
  type: BENCH_CONSTANTS.RECEIVE_BENCH,
  bench
});
