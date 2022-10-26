// Configuring emotion styles
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { constants } from 'fs/promises';

// Dependencies
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

// Components and Styles
import { FaUserAlt as UserIcon } from 'react-icons/fa';
import { fontFamily, fontSize, gray1, gray2, gray5 } from '../Styles';

// Form data structure
type FormData = {
  search: string;
};

export const Header = () => {
  // Destructure register and handleSubmit hook
  const { register, handleSubmit } = useForm<FormData>();

  // Destructure search parameters
  const [searchParams] = useSearchParams();

  // Assign criteria search parameter to criteria variable
  const criteria = searchParams.get('criteria') || '';

  // Assign useNavigate function to navigate variable
  const navigate = useNavigate();

  // Handle search form submission, initiate search and navigate to search page
  const submitForm = ({ search }: FormData) => {
    // Navigate to search page and assign search parameter to criteria
    navigate(`search?criteria=${search}`);
  };

  return (
    <div
      css={css`
        position: fixed;
        box-sizing: border-box;
        top: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 20px;
        background-color: #fff;
        border-bottom: 1px solid ${gray5};
        box-shadow: 0 3px 7px 0 rgba(110, 112, 114, 0.21);
      `}
    >
      <Link
        to="/"
        css={css`
          font-size: 24px;
          font-weight: bold;
          color: ${gray1};
          text-decoration: none;
        `}
      >
        Q & A
      </Link>
      <form onSubmit={handleSubmit(submitForm)}>
        <input
          {...register('search')}
          type="text"
          placeholder="Enter search..."
          defaultValue={criteria}
          css={css`
            box-sizing: border-box;
            font-family: ${fontFamily};
            font-size: ${fontSize};
            padding: 8px 10px;
            border: 1px solid ${gray5};
            border-radius: 3px;
            color: ${gray2};
            background-color: #fff;
            width: 200px;
            height: 30px;

            :focus {
              outline-color: ${gray5};
            }
          `}
        />
      </form>
      <Link
        to="signin"
        css={css`
          font-family: ${fontFamily};
          font-size: ${fontSize};
          padding: 5px 10px;
          background-color: transparent;
          color: ${gray2};
          text-decoration: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          :focus {
            outline-color: ${gray5};
          }

          span {
            margin-left: 7px;
          }
        `}
      >
        <div
          css={css`
            width: 12px;
            opacity: 0.6;
          `}
        >
          <UserIcon />
        </div>
        <span>Sign In</span>
      </Link>
    </div>
  );
};
