export default function ExecuteCallbackWithParams(callback, ...parameters) {
  if (typeof callback === 'function') callback(...parameters);
};
