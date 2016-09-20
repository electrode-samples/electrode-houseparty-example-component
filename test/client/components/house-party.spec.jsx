/**
 * Client tests
 */
import React from "react";
import { shallow } from "enzyme";

import HouseParty from "src/components/house-party";

describe("components/resource-list", () => {

  let invitees;
  let friends;

  beforeEach(() => {
    friends = [
      {name: "electrode", img: "//goo.gl/I9utJF", size: 12},
      {name: "node", img: "//goo.gl/hxmCEE", size: 12},
      {name: "React", img: "//goo.gl/xwbqlB", size: 12}
    ];
    invitees = [
      {name: "electrode", invited: false},
      {name: "node", invited: false},
      {name: "React", invited: false}
    ];
  });

  describe("Mounting", () => {

    it("should render into the document", () => {
      const component = shallow(<HouseParty ourFriends={friends} invitees={invitees}/>);
      expect(component).to.not.be.null;
    });

  });

});
