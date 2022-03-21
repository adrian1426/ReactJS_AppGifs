import { act, renderHook } from '@testing-library/react-hooks';
import { useSearchForm } from '../../hooks/useSearchForm';

const setupUseSearchForm = (params) => renderHook(() => useSearchForm(params));

describe('useSearchForm.js', () => {
  test('Should change keyword', () => {
    const { result } = setupUseSearchForm();

    act(() => {
      result.current.buscarGif('batman');
    });

    expect(result.current.keyword).toBe('batman');
  });

  test('Should use initial values', () => {
    const { result } = setupUseSearchForm({
      valueKeyword: 'Matrix'
    });

    expect(result.current.keyword).toBe('Matrix');
  });

  test('Should update times', () => {
    const { result } = setupUseSearchForm();;

    act(() => {
      result.current.buscarGif('b');
      result.current.buscarGif('ba');
    });

    expect(result.current.keyword).toBe('ba');
    expect(result.current.times).toBe(2);
  });
});