import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { colors } from '~/theme';

interface UploadProps {
  isDragActive: boolean;
  isDragReject: boolean;
  refKey?: string;
  [key: string]: any;
  type?: 'error' | 'success' | 'default';
}

const dragActive = css`
  border-color: ${colors.primary};
`;

const dragReject = css`
  border-color: ${colors.red};
`;

export const DropContainer = styled.div.attrs({
  className: 'dropzone',
})`
  border: 1.5px dashed #969cb3;
  margin-top: 100px;
  border-radius: 5px;
  cursor: pointer;
  transition: height 0.2s ease;
  ${(props: UploadProps): false | FlattenSimpleInterpolation =>
    props.isDragActive && dragActive}
  ${(props: UploadProps): false | FlattenSimpleInterpolation =>
    props.isDragReject && dragReject}
`;

const messageColors = {
  default: colors.primary,
  error: colors.red,
  success: colors.accent,
};

export const UploadMessage = styled.p`
  display: flex;
  font-size: 16px;
  line-height: 24px;
  padding: 48px 0;
  color: ${({ type }: UploadProps) => messageColors[type || 'default']};
  justify-content: center;
  align-items: center;
`;