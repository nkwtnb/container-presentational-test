import React from 'react';
import { cleanup, render, waitFor } from '@testing-library/react';
import ListContainer from "../ListContainer";
import * as Presenter from '../Presenter';
import { act } from 'react-dom/test-utils';

afterEach(() => {
  cleanup();
});

describe("ListContainerのテスト", () => {
  test("Containerから todos の引数が渡されていること。", async () => {
    const mock = jest.spyOn(Presenter, "default");
    await act(() => {
      render(<ListContainer />);
    });
    await waitFor(() => {
      expect(mock).toBeCalledTimes(2);
      expect(mock).toHaveBeenNthCalledWith(2, {
        todos: expect.anything(),
      }, {});
    }, { timeout: 5000 });
  });
});
