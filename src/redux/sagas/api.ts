import {AxiosResponse} from 'axios'

import api from 'src/utils/api'

class ApiSaga {
  *get<T = any>(endpoint: string, params?: object): Generator<any, any, AxiosResponse<T>> {
    try {
      const result = yield api.get<T>(endpoint, {params})

      return result
    } catch (error) {
      throw error
    }
  }

  *post<T = any>(endpoint: string, body?: object): Generator<any, any, AxiosResponse<T>> {
    try {
      const result = yield api.post<T>(endpoint, body)

      return result
    } catch (error) {
      throw error
    }
  }

  *put<T = any>(endpoint: string, body?: object): Generator {
    try {
      const result = yield api.put<T>(endpoint, body)

      return result
    } catch (error) {
      throw error
    }
  }

  *patch<T = any>(endpoint: string, body?: object): Generator<any, any, AxiosResponse<T>> {
    try {
      const result = yield api.patch<T>(endpoint, body)

      return result
    } catch (error) {
      throw error
    }
  }

  *delete<T = any>(endpoint: string): Generator<any, any, AxiosResponse<T>> {
    try {
      const result = yield api.delete<T>(endpoint)

      return result
    } catch (error) {
      throw error
    }
  }
}

export default new ApiSaga()
