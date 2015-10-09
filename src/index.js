import $ from 'jquery';
import Rx from 'rx';

let $log = $('#log')

function logMessage(msg) {
	$log.append(`<li>${msg}</li>`)
}

let source = Rx.Observable.from([1,2,3,4,5])

let subscription = source.subscribe(
	x => logMessage(`onNext: ${x}`),
	e => logMessage(`onError: ${e}`),
	() => logMessage('onCompleted')
)
