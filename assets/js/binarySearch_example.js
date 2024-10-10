// 로그시간 = 이진탐색

// 특정 값을 찾는 것이 아님
// 최소 몇 분에 모든 작업이 끝나는가?
// ㄴ 결정문제 = 이진탐색 = Parametric Search

// 최소 1분 ~ 10억 * n분 사이
// 면접관들이 몇 명을 처리하는가?
// 처리 가능한 입국자가 n보다 작다면 분을 올리고, n보다 크다면 분을 낮춘다.
// 면접관이 시간 대비 몇 명을 처리할 수 있는가?
// 시간 / 심사시간 = 심사관 당 처리가능한 입국자 수

function solution(n, times) {
    const sortedTimes = times.sort((a,b) => a - b);
    let left = 1;
    let right = sortedTimes[sortedTimes.length - 1] * n;

    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        // sum([시간 / 심사시간])
        const sum = times.reduce((acc, time) => acc + Math.floor(mid / time), 0);

        if(sum < n) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;
}