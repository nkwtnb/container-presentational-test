import React from 'react';
import { cleanup, render, RenderResult, screen, waitFor } from '@testing-library/react';
import ListContainer from '../ListContainer';
import Presenter from '../Presenter';
import { act } from 'react-dom/test-utils';

afterEach(() => {
  cleanup();
});

describe("Presenterのテスト", () => {
  test("todos = 0件 の時、「データなし」が表示されること", async () => {
    await act(() => {
    render(<Presenter todos={[]} />);
    });
    expect(screen.getByTestId("no-todos")).toHaveTextContent("データなし");
  });
  test("todos > 0件 の時、todo表示要素「todos」が表示されること", async () => {
    await act(() => {
      render(<Presenter todos={[{id: 1, title: "test", userId: 1, completed: true}]} />);
    });
    // state更新後の再描画を待機
    await waitFor(() => {
      expect(screen.getByTestId("todos").children.length).toBe(1);
    });
  });
  test("スナップショットが一致していること", async () => {
    let element: RenderResult;
    await act(() => {
      element = render(<ListContainer />);
    });
    // 初期値は[]の為、0件の表示
    expect(screen.getByTestId("no-todos")).toHaveTextContent("データなし");
    // 200件取得されるまで待機
    await waitFor(() => {
      expect(screen.getByTestId("todos").children.length).toBe(200);
    });
    // asFragment > toMatchSnapshotでスナップショットテスト
    expect(element!.asFragment()).toMatchSnapshot();
  });
});
