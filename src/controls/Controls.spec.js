// Test away!

import React from "react";
import { render } from "react-testing-library";
import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";

import Controls from "./Controls.js";

describe("<Controls />", () => {
  it("Button disabled", () => {
    const { getByText, getByTestId, container } = render(
      <Controls locked={true} closed={true} />
    );

    const Disable = getByText(/disabled/i);

    expect(getByTestId(container, Disable)).toBeDisabled();

    expect(Disable).toHaveAttribute("disabled");
  });

  it("Component unmounted following each test", () => {
    
  });
}); 